import { Sequelize } from "sequelize";
import initUser from "./users";
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
authenticate();
const db = {
  sequelize,
  User,
};
export default db;
