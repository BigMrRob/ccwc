"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statistics = void 0;
class Statistics {
    constructor(data) {
        this.data = data;
    }
    getBytes() {
        return Buffer.byteLength(this.data);
    }
    getLines() {
        return this.data.split("\n").length;
    }
    getWords() {
        return this.data.split(/\s+/).filter((word) => word !== "").length;
    }
    getCharacters() {
        return this.data.length;
    }
    getSummary(filePath) {
        return `${this.getBytes()} ${this.getLines()} ${this.getWords()} ${filePath}`;
    }
}
exports.Statistics = Statistics;
