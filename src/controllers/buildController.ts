import { Router, Request, Response } from "express";
import { User } from "../entity/User";
import { Build } from "../entity/Build";
import { Item } from "../entity/Item";
import { Between, MoreThan } from "typeorm";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const { limit, skip } = req.query;

  const builds = await Build.find({
    take: limit || 50,
    skip: skip || 0,
  });

  return res.json({
    offset: skip || 0,
    count: builds.length,
    builds
  });
});

// Popular gets the highest rated builds submitted within the last month
router.get("/popular", async (req: Request, res: Response) => {
  const { limit, skip } = req.query;

  const date = new Date(Date.now());
  date.setMonth(date.getMonth() - 1);

  const builds = await Build.createQueryBuilder("build")
    .where("build.created_at > :date", {date: date.toISOString()})
    .orWhere("build.updated_at > :date", {date: date.toISOString()})
    .leftJoinAndSelect("build.author", "user")
    .leftJoinAndSelect("build.items", "item")
    .orderBy("build.score", "DESC")
    .take(limit || 50)
    .skip(skip || 0)
    .getMany();

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

router.post("/", async (req: Request, res: Response) => {
  const user = await User.findOne({ username: req.body.author });

  const build = Build.create(req.body);

  build.author = user;

  build.items = [];
  for (const i of req.body.items) {
    const item = Item.create(i);
    build.items.push(item);
  }

  return res.json(await build.save());
});

router.put("/", async (req: Request, res: Response) => {
  await Build.update({ id: req.body.id }, req.body);

  const build = await Build.findOne({ id: req.body.id });

  build.items = [];
  for (const i of req.body.items) {
    const item = Item.create(i);
    build.items.push(item);
  }

  return res.json(await build.save());
});

export default router;
