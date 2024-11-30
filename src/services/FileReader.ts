import { readFileSync } from "fs";

export class FileReader {
  static read(filePath: string): string {
    try {
      return readFileSync(filePath, { encoding: "utf-8", flag: "r" });
    } catch (error) {
      throw new Error(`Failed to read file: ${filePath}`);
    }
  }
}
