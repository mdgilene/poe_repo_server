import { Router, Request, Response } from "express";
import { User } from "../entity/User";
import { Build } from "../entity/Build";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const { limit, skip } = req.query;

  const builds = await Build.find({
    take: limit || 50,
    skip: skip || 0
  });

  return res.json({
    offset: skip || 0,
    count: builds.length,
    builds
  });
});

router.get("/:id", async (req: Request, res: Response) => {
  const build = await Build.findOne(req.params.id);

  return res.json(build);
});

export default router;
