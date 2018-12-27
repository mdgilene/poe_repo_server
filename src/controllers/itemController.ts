import { Router, Request, Response } from "express";
import { Item } from "../entity/Item";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const items = await Item.find({ order: { id: "ASC" } });

  return res.json(items);
});

export default router;
