import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

import UserController from "./controllers/userController";
import BuildController from "./controllers/buildController";
import RoleController from "./controllers/roleController";
import ItemController from "./controllers/itemController";
import PermissionController from "./controllers/permissionController";

createConnection()
  .then(async connection => {
    const app = express();

    app.use(bodyParser.json());
    app.use(cors({ origin: "http://localhost:8080" }));

    // TODO: Add authentication to these routes to restrict access to certian routes
    app.use("/api/users", UserController);
    app.use("/api/builds", BuildController);
    app.use("/api/roles", RoleController);
    app.use("/api/permissions", PermissionController);
    app.use("/api/items", ItemController);

    const port = process.env.port || 5000;
    app.listen(port, () => console.log(`Server running on port ${port}...`));
  })
  .catch(error => console.log(error));
