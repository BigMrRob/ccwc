"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CliParser = void 0;
const Flag_1 = require("../types/Flag");
class CliParser {
    static parse(args) {
        if (args.length < 3) {
            throw new Error("No file provided");
        }
        if (args.length === 3) {
            return { filePath: args[2] };
        }
        const flag = args[2];
        const filePath = args[3];
        if (!Object.values(Flag_1.Flag).includes(flag)) {
            return { filePath };
        }
        return { flag, filePath };
    }
}
exports.CliParser = CliParser;
