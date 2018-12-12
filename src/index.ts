import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";

import UserController from "./controllers/userController";
import BuildController from "./controllers/buildController";

createConnection()
  .then(async connection => {
    const app = express();

    app.use(bodyParser.json());

    app.use("/api/users", UserController); //TODO: Lock this behind admin credentials
    app.use("/api/builds", BuildController);

    const port = process.env.port || 5000;
    app.listen(port, () => console.log(`Server running on port ${port}...`));
  })
  .catch(error => console.log(error));
