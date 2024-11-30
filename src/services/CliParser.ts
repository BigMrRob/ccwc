import { Flag } from "../types/Flag";

export class CliParser {
  static parse(args: string[]): { flag?: Flag; filePath: string } {
    if (args.length < 3) {
      throw new Error("No file provided");
    }

    if (args.length === 3) {
      return { filePath: args[2] };
    }

    const flag = args[2] as Flag;
    const filePath = args[3];

    if (!Object.values(Flag).includes(flag)) {
      return { filePath };
    }

    return { flag, filePath };
  }
}
