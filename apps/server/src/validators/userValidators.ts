import joi from "joi";
import { Request, Response, NextFunction } from "express";

const registerUserSchema = joi
  .object({
    name: joi.string().required(),
    phone: joi.number().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  })
  .required();

export function validateRegisterUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = registerUserSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((detail) => detail.message) });
  }

  next();
}
