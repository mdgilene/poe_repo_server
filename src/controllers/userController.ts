import { Router, Request, Response } from "express";
import { User } from "../entity/User";

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

router.get("/:username/builds", async (req: Request, res: Response) => {
  const builds = await User.getBuilds(req.params.username);

  return res.json(builds);
});

export default router;
