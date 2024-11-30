export class Logger {
  static log(value: number | string): void {
    console.log(value);
  }

  static error(error: unknown): void {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(String(error));
    }
    process.exit(1);
  }
}
