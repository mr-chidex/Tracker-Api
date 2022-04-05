import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import dotenv from "dotenv";

const app: Application = express();
dotenv.config();
const apiVersion = process.env.API_VERSION || "v1";

app.use(express.json());
app.use(morgan("dev"));

app.use("/", (_: Request, res: Response) => {
  res.json({
    success: true,
    name: "mr-chidex",
    github: "github.com/mr-chidex",
    route: `/api/${apiVersion}/tracker`,
  });
});

//Handle server error
app.use((err: Error, _: Request, res: Response, __: NextFunction) => {
  if (process.env.NODE_ENV === "development") {
    console.log(err.stack);
  }
  res.status(500).json({ message: err.message, error: true });
});

export default app;
