import { initDb } from "./db";
import { getAllProductQuery } from "./db-queries";
import mongoose from "mongoose";

const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getAllProducts", async (req, res) => {
  const products: mongoose.Document[] = await getAllProductQuery();
  res.send(products);
});

app.listen(port, () => {
     console.log(`Server running on http://localhost:${port}`);
     initDb();
});
