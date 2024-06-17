import express, { Request, Response } from "express";
import { validateRegisterUser } from "../validators/userValidators";
import { registerUsers } from "../controllers/usersController";

const router = express.Router();

router.get("/profile", (req: Request, res: Response) => {
  res.send("users profile");
});

router.get("/login", (req: Request, res: Response) => {
  res.send("users login");
});

router.post("/register", validateRegisterUser, registerUsers);

export default router;
