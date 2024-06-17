import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("get orders for the authenticated user");
});

router.post("/", (req: Request, res: Response) => {
  res.send("create order");
});

router.get("/:id", (req: Request, res: Response) => {
  res.send("Retrieves details of a specific order by ID.");
});

router.put("/:id", (req: Request, res: Response) => {
  res.send("admin route- update order");
});

export default router;
