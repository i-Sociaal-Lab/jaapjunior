import { readdir } from "node:fs/promises";
import { join } from "node:path";

export interface SourceFile {
    file: string;
    extension: string;
}

export async function walk(dir: string): Promise<SourceFile[]> {

    const result: SourceFile[] = [];

    async function recurse(folder: string) {

        const files = await readdir(folder, {
            withFileTypes: true
        });

        for (const f of files) {

            const full = join(folder, f.name);

            if (f.isDirectory()) {
                await recurse(full);
                continue;
            }

            const ext = f.name.split(".").pop()?.toLowerCase();

            result.push({
                file: full,
                extension: ext ?? ""
            });
        }
    }

    await recurse(dir);

    return result;
}