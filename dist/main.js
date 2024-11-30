#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const CliParser_1 = require("./services/CliParser");
const FileReader_1 = require("./services/FileReader");
const Statistics_1 = require("./services/Statistics");
const Logger_1 = require("./services/Logger");
const Flag_1 = require("./types/Flag");
const main = () => {
    try {
        const { flag, filePath } = CliParser_1.CliParser.parse(process_1.argv);
        const data = FileReader_1.FileReader.read(filePath);
        const stats = new Statistics_1.Statistics(data);
        if (!flag) {
            Logger_1.Logger.log(stats.getSummary(filePath));
            return;
        }
        switch (flag) {
            case Flag_1.Flag.BYTES:
                Logger_1.Logger.log(stats.getBytes());
                break;
            case Flag_1.Flag.LINES:
                Logger_1.Logger.log(stats.getLines());
                break;
            case Flag_1.Flag.WORDS:
                Logger_1.Logger.log(stats.getWords());
                break;
            case Flag_1.Flag.CHARACTERS:
                Logger_1.Logger.log(stats.getCharacters());
                break;
        }
    }
    catch (error) {
        Logger_1.Logger.error(error);
    }
};
main();
