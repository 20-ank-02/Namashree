import express from "express";
import users from "../routes/users";
import orders from "../routes/orders";
import products from "../routes/products";

const v1 = express.Router();

v1.use("/users", users);
v1.use("/products", products);
v1.use("/orders", orders);

export default v1;
