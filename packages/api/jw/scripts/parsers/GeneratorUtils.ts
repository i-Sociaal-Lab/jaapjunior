import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

export async function ensureDirectory(file: string): Promise<void> {
    await mkdir(dirname(file), { recursive: true });
}

export async function writeGeneratedFile(
    file: string,
    body: string,
    header?: string
): Promise<void> {

    await ensureDirectory(file);

    const content =
`${header ?? "// AUTO-GENERATED - DO NOT EDIT"}

${body}
`;

    await writeFile(file, content, "utf8");
}

export function unique(values: string[]): string[] {
    return [...new Set(values.filter(Boolean))];
}

export function normalize(text: string): string {

    return text
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
}

export function tokenize(text: string): string[] {

    return unique(
        normalize(text)
            .split(/[^a-z0-9]+/)
            .filter(v => v.length > 1)
    );
}

export function firstMatch(regex: RegExp, text: string): string | undefined {
    return text.match(regex)?.[1]?.trim();
}