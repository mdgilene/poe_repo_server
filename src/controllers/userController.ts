import { Router, Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { User } from "../entity/User";
import { Role } from "../entity/Role";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const { limit, skip } = req.query;

  const users = await User.find({
    take: limit || 50,
    skip: skip || 0
  });

  return res.json({
    offset: skip || 0,
    count: users.length,
    users
  });
});

router.post("/", async (req: Request, res: Response) => {
  const user = User.create(req.body);

  user.password_hash = await bcrypt.hash(req.body.password, 10);

  return res.json(await user.save());
});

router.get("/:username", async (req: Request, res: Response) => {
  const user = await User.findOne({ username: req.params.username });

  return res.json(user);
});

router.get("/:username/builds", async (req: Request, res: Response) => {
  const user = await User.findOne(
    { username: req.params.username },
    {
      relations: ["builds"]
    }
  );

  return res.json(user.builds);
});

router.get("/:username/roles", async (req: Request, res: Response) => {
  const user = await User.findOne(
    { username: req.params.username },
    {
      relations: ["roles"]
    }
  );

  return res.json(user.roles);
});

router.post("/:username/roles", async (req: Request, res: Response) => {
  const role = await Role.findOne({ name: req.body.name });

  if (!role) return res.status(404).json({ error: "Role not found" });

  const user = await User.findOne(
    { username: req.params.username },
    {
      relations: ["roles"]
    }
  );

  user.roles.push(role);

  return res.json(await user.save());
});

router.delete("/:username", async (req: Request, res: Response) => {
  const user = await User.findOne({ username: req.params.username });

  return res.json(await user.remove());
});

export default router;
