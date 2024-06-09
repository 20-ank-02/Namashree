import express, { Request, Response } from "express";
import v1 from "./api/v1";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = parseInt(process.env.PORT || "8000", 10);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
app.use("/v1", v1);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Not Found Handler
app.use("*", (req: Request, res: Response) => {
  res.status(404).send("This route doesn't exists!");
});
