import * as fs from "fs";
import * as path from "path";
import { Item } from "../entity/Item";
import { Variant } from "../entity/Variant";
import { ItemModifier } from "../entity/ItemModifier";
import { League } from "../entity/League";
import { BaseItem } from "../entity/BaseItem";

export default {
  async seed() {
    console.log("Seeding Items Table...");

    const files = fs.readdirSync(path.join(__dirname, "../data/uniques"));

    for (const file of files) {
      const item_data = JSON.parse(
        fs
          .readFileSync(path.join(__dirname, "../data/uniques", file))
          .toString()
      );
      for (const type in item_data) {
        const real_type = type.replace(": ", ":");

        for (const item of item_data[type]) {
          const db_item = new Item();

          let league = undefined;
          if (item.league) {
            try {
              league = await League.findOneOrFail({ name: item.league });
            } catch (err) {
              league = League.create({ name: item.league });
              await league.save();
            }
          }

          db_item.name = item.name;
          db_item.slot = real_type;
          db_item.level_req = item.requirements
            ? item.requirements.level
            : undefined;
          db_item.stat_req = item.requirements
            ? item.requirements.stats
            : undefined;
          db_item.rarity = "unique";
          db_item.shaper = item.shaper;
          db_item.elder = item.elder;
          db_item.corrupted = item.corrupted;
          db_item.source = item.source;
          db_item.upgrade = item.upgrade;
          db_item.league = league;

          const b = await BaseItem.findOne({name: item.base});
          if (b) {
            db_item.base_item = b;
          }

          const variants = [];
          if (item.variants) {
            for (const variant of item.variants) {
              let v = await Variant.findOne({ name: variant });
              if (!v) {
                v = Variant.create({ name: variant });
                await v.save();
              }
              variants.push(v);
            }
          }
          db_item.variants = variants;

          const implicits = [];
          if (item.implicits) {
            for (const implicit of item.implicits) {
              let m = await ItemModifier.findOne({ text: implicit });
              if (!m) {
                m = ItemModifier.create({text: implicit});
                await m.save();
              }
              implicits.push(m);
            }
          }
          db_item.implicits = implicits;

          const explicits = [];
          if (item.explicits) {
            for (const explicit of item.explicits) {
              let m = await ItemModifier.findOne({ text: explicit });
              if (!m) {
                m = ItemModifier.create({text: explicit});
                await m.save();
              }
              explicits.push(m);
            }
          }
          db_item.explicits = explicits;

          await db_item.save();
        }
      }
    }
  }
};
