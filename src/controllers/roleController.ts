import { Router, Request, Response } from "express";
import { Role } from "../entity/Role";
import { Permission } from "../entity/Permission";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const roles = await Role.find();

  res.json(roles);
});

router.get("/:role/users", async (req: Request, res: Response) => {
  const role = await Role.findOne(
    { name: req.params.role },
    { relations: ["users"] }
  );

  return res.json(role.users);
});

router.post("/", async (req: Request, res: Response) => {
  const role = Role.create(req.body);

  res.json(await role.save());
});

router.post("/:role/permissions", async (req: Request, res: Response) => {
  const role = await Role.findOne(
    { name: req.params.role },
    { relations: ["permissions"] }
  );

  const permission = await Permission.findOne({ name: req.body.name });

  role.permissions.push(permission);

  res.json(await role.save());
});

export default router;
