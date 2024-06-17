import { Request, Response } from "express";
// import bcrypt from "bcryptjs";
export const registerUsers = async (req: Request, res: Response) => {
  const { name, phone, email, password } = req.body;

  // hashing the password
  // const salt = await bcrypt.genSalt(10);
  // const password_hash = await bcrypt.hash(password, salt);

  res.send("users");
};
