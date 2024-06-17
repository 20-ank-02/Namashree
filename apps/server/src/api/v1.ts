import express from "express";
import users from "../routes/userRoutes";
import orders from "../routes/orderRoutes";
import products from "../routes/productRoutes";

const v1 = express.Router();

v1.use("/users", users);
v1.use("/products", products);
v1.use("/orders", orders);

export default v1;
