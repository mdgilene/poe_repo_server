import { Router, Request, Response } from "express";
import { Permission } from "../entity/Permission";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const permissions = await Permission.find();

  res.json(permissions);
});

router.get("/:permssion/roles", async (req: Request, res: Response) => {
  const permission = await Permission.findOne(
    { name: req.params.permission },
    { relations: ["roles"] }
  );

  return res.json(permission.roles);
});

router.post("/", async (req: Request, res: Response) => {
  const permission = Permission.create(req.body);

  res.json(await permission.save());
});

export default router;
