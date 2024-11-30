export class Statistics {
  constructor(private readonly data: string) {}

  getBytes(): number {
    return Buffer.byteLength(this.data);
  }

  getLines(): number {
    return this.data.split("\n").length;
  }

  getWords(): number {
    return this.data.split(/\s+/).filter((word) => word !== "").length;
  }

  getCharacters(): number {
    return this.data.length;
  }

  getSummary(filePath: string): string {
    return `${this.getBytes()} ${this.getLines()} ${this.getWords()} ${filePath}`;
  }
}
