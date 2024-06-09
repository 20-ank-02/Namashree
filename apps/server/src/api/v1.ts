import express from "express";
import users from "../routes/users";

const v1 = express.Router();

v1.use("/users", users);

export default v1;
