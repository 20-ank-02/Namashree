import initCustomization from "./Customization";
import setupAssociations from "./associations";
import initOrderItem from "./OrderItem";
import { Sequelize } from "sequelize";
import initMaterial from "./Material";
import initProduct from "./Product";
import initDesign from "./Design";
import initColor from "./Color";
import initOrder from "./Order";
import initUser from "./User";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config();

const ca = fs.readFileSync(path.join(__dirname, "..", "..", "certs", "ca.pem"));
const sequelize = new Sequelize(process.env.POSTGRES_URI ?? "", {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      ca: ca,
      rejectUnauthorized: false,
    },
  },
});

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log("Connection to DB has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

const User = initUser(sequelize);
const Order = initOrder(sequelize);
const Color = initColor(sequelize);
const Design = initDesign(sequelize);
const Product = initProduct(sequelize);
const Material = initMaterial(sequelize);
const OrderItem = initOrderItem(sequelize);
const Customization = initCustomization(sequelize);

const models = {
  User,
  Order,
  Color,
  Design,
  Product,
  Material,
  OrderItem,
  Customization,
};

authenticate();

setupAssociations(models);

const db = {
  sequelize,
  ...models,
};
export default db;
