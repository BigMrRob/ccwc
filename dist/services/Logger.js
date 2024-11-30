"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static log(value) {
        console.log(value);
    }
    static error(error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        else {
            console.error(String(error));
        }
        process.exit(1);
    }
}
exports.Logger = Logger;
