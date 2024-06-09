import express, { Request, Response } from "express";

const router = express.Router();

router.get("/profile", (req: Request, res: Response) => {
  res.send("users profile");
});

export default router;
