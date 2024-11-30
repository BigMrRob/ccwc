"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReader = void 0;
const fs_1 = require("fs");
class FileReader {
    static read(filePath) {
        try {
            return (0, fs_1.readFileSync)(filePath, { encoding: "utf-8", flag: "r" });
        }
        catch (error) {
            throw new Error(`Failed to read file: ${filePath}`);
        }
    }
}
exports.FileReader = FileReader;
