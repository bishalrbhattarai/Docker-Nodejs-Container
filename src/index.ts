import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Running on ${process.env.PORT || 3000}`)
);
