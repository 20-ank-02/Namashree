import express, { Request, Response } from "express";

const router = express.Router();

router.get("/profile", (req: Request, res: Response) => {
  res.send("users profile");
});

router.get("/login", (req: Request, res: Response) => {
  res.send("users login");
});

router.get("/register", (req: Request, res: Response) => {
  res.send("users register");
});

export default router;
