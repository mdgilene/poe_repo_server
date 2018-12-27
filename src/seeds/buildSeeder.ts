import { Build } from "../entity/Build";
import { User } from "../entity/User";
import { Item } from "../entity/Item";

export default {
  async seed() {
    console.log("Seeding Build Table...");

    const admin = await User.findOne({ username: "admin" });

    for (let i in Array(100).fill(1)) {
      const build = Build.create({
        name: "Test Build 1",
        author: admin,
        introduction_text: `This is text for the introduction section
        
        It will be of markdown format and rendered as such on the front end.`,
        cost_text: `This is text for the cost section
        
        It will be of markdown format and rendered as such on the front end.`,
        item_text: `This is text for the item section
        
        It will be of markdown format and rendered as such on the front end.`,
        score: Math.floor(Math.random() * 10000)
      });

      build.items = [];
      const slots = [
        "Helmet",
        "Weapon:One Handed Sword",
        "Ring",
        "Boots:Armour",
        "Gloves:Evasion",
        "Belt"
      ];
      for (let i = 0; i < slots.length; i++) {
        const items = await Item.find({ slot: slots[i] });
        const index = Math.floor(Math.random() * (items.length - 1));
        const item = items[index];
        build.items.push(item);
      }

      await build.save();
    }
  }
};
