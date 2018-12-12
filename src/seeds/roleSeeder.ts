import { Role } from "../entity/Role";

export default {
  seed() {
    console.log("Seeding Role Table...");

    const admin = Role.create({
      name: "admin"
    });
    const user = Role.create({
      name: "user"
    });
    const guest = Role.create({
      name: "guest"
    });

    return Promise.all([admin.save(), user.save(), guest.save()]);
  }
};
