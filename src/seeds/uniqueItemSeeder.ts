import * as fs from "fs";
import * as path from "path";
import { Item } from "../entity/Item";

export default {
  async seed() {
    console.log("Seeding Items Table...");

    const files = fs.readdirSync(path.join(__dirname, "../data/uniques"));

    for (const file of files) {
      const raw_items = fs
        .readFileSync(path.join(__dirname, "../data/uniques", file))
        .toString()
        .split("\n\n");
      for (const raw_item of raw_items) {
        const item = Item.create({
          rarity: "unique",
          slot: file.replace(".dat", ""),
          text: raw_item
        });
        await item.save();
      }
    }
  }
};
