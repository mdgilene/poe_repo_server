import { Item } from "../entity/Item";

export default {
  async seed() {
    const items = [];
    for (let i in Array(5).fill(1)) {
      const item = Item.create({
        rarity: "normal",
        base_item: "base item goes here",
        icon: "icon goes here",
        properties: "dex=0|int=0|str=0|lvl=0",
        modifiers: "modifier1|modifier2|modifier3"
      });

      await item.save();

      items.push(item);
    }

    return items;
  }
};
