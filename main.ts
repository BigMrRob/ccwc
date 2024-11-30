#!/usr/bin/env node

import { argv } from "process";
import { CliParser } from "./src/services/CliParser";
import { FileReader } from "./src/services/FileReader";
import { Statistics } from "./src/services/Statistics";
import { Logger } from "./src/services/Logger";
import { Flag } from "./src/types/Flag";

const main = () => {
  try {
    const { flag, filePath } = CliParser.parse(argv);
    const data = FileReader.read(filePath);
    const stats = new Statistics(data);

    if (!flag) {
      Logger.log(stats.getSummary(filePath));
      return;
    }

    switch (flag) {
      case Flag.BYTES:
        Logger.log(stats.getBytes());
        break;
      case Flag.LINES:
        Logger.log(stats.getLines());
        break;
      case Flag.WORDS:
        Logger.log(stats.getWords());
        break;
      case Flag.CHARACTERS:
        Logger.log(stats.getCharacters());
        break;
    }
  } catch (error: unknown) {
    Logger.error(error);
  }
};

main();
