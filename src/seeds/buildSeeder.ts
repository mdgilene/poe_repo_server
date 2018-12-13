import { Build } from "../entity/Build";
import { User } from "../entity/User";

import itemSeeder from "./itemSeeder";

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
        
        It will be of markdown format and rendered as such on the front end.`
      });

      build.items = await itemSeeder.seed();

      await build.save();
    }
  }
};
