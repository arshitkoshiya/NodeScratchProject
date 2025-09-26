import express, { Request, Response } from 'express'
import router from './routes/routeConfig';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err: Error) => {
    console.error("Error connecting to MongoDB", err);
  });

app.use("/api", router);

app.post("/submit-form", (req: Request, res: Response) => {
  res.send("Form submitted");
});

app.post("/", (req: Request, res: Response) => {
  const { name } = req.body;
  res.send(`Welcome ${name}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
