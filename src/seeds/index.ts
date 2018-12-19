import "reflect-metadata";
import { createConnection } from "typeorm";
import userSeeder from "./userSeeder";
import roleSeeder from "./roleSeeder";
import buildSeeder from "./buildSeeder";
import uniqueItemSeeder from "./uniqueItemSeeder";

createConnection()
  .then(async connection => {
    await roleSeeder.seed();
    await userSeeder.seed();
    await uniqueItemSeeder.seed();
    await buildSeeder.seed();

    connection.close();
  })
  .catch(error => console.log(error));
