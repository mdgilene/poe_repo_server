import * as bcrypt from "bcrypt";
import { User } from "../entity/User";
import { Role } from "../entity/Role";

export default {
  async seed() {
    console.log("Seeding User Table...");

    const user = User.create({
      username: "admin",
      email: "mdgilene@gmail.com",
      password_hash: await bcrypt.hash("password", 10)
    });

    const roles = await Role.find();

    user.roles = roles;

    return user.save();
  }
};
