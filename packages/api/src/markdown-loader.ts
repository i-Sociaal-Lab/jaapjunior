import { readdir } from "node:fs/promises";
import { join, relative } from "node:path";
import { Document } from "llamaindex";

type FrontMatter = Record<string, unknown>;

function parseFrontMatter(content: string, filePath: string): {
    metadata: FrontMatter;
    body: string;
} {
    const match = content.match(
        /^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/,
    );

    if (!match) {
        return {
            metadata: {},
            body: content,
        };
    }

    let parsed: unknown;

    try {
        parsed = (Bun as typeof Bun & {
            YAML: {
                parse(input: string): unknown;
            };
        }).YAML.parse(match[1]);
    } catch (error) {
        throw new Error(
            `Ongeldige YAML front matter in ${filePath}: ${
                error instanceof Error ? error.message : String(error)
            }`,
        );
    }

    if (
        parsed === null ||
        typeof parsed !== "object" ||
        Array.isArray(parsed)
    ) {
        throw new Error(
            `YAML front matter in ${filePath} moet een object zijn.`,
        );
    }

    return {
        metadata: parsed as FrontMatter,
        body: content.slice(match[0].length),
    };
}

/**
 * Zet YAML-waarden om naar metadata-waarden die LlamaIndex/Qdrant
 * veilig kunnen verwerken, waarbij arrays behouden blijven.
 */
function metadataValue(
    value: unknown,
): string | number | boolean | string[] | null {
    if (
        value === null ||
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
    ) {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map((item) => String(item));
    }

    return JSON.stringify(value);
}

async function findMarkdownFiles(directory: string): Promise<string[]> {
    const result: string[] = [];

    async function walk(currentDirectory: string): Promise<void> {
        const entries = await readdir(currentDirectory, {
            withFileTypes: true,
        });

        for (const entry of entries) {
            const fullPath = join(currentDirectory, entry.name);

            if (entry.isDirectory()) {
                await walk(fullPath);
            } else if (
                entry.isFile() &&
                /\.(md|markdown)$/i.test(entry.name)
            ) {
                result.push(fullPath);
            }
        }
    }

    await walk(directory);

    return result.sort();
}

export async function loadMarkdownDocuments(
    dataDir: string,
): Promise<Document[]> {
    const files = await findMarkdownFiles(dataDir);
    const documents: Document[] = [];

    for (const filePath of files) {
        const content = await Bun.file(filePath).text();

        const {
            metadata: frontMatter,
            body,
        } = parseFrontMatter(content, filePath);

        const relativePath = relative(dataDir, filePath).replaceAll(
            "\\",
            "/",
        );

        const fileName =
            relativePath.split("/").pop() ?? relativePath;

        const metadata: Record<
            string,
            string | number | boolean | string[] | null
        > = {
            ...Object.fromEntries(
                Object.entries(frontMatter).map(([key, value]) => [
                    key,
                    metadataValue(value),
                ]),
            ),
            file_name: fileName,
            file_path: relativePath,
            source: relativePath,
        };

        const id = relativePath.replace(
            /\.(md|markdown)$/i,
            "",
        );

        documents.push(
            new Document({
                id_: id,
                text: body.trim(),
                metadata,
            }),
        );
    }

    return documents;
}
