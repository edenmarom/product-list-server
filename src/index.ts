import { initDb } from "./db";
import { getAllProductQuery } from "./db-queries";
import mongoose from "mongoose";
import cors from "cors";


const express = require("express");

const app = express();
const port = 3000;

app.use(cors());

app.get("/getAllProducts", async (req, res) => {
  const products: mongoose.Document[] = await getAllProductQuery();
  res.send(products);
});

app.listen(port, () => {
     console.log(`Server running on http://localhost:${port}`);
     initDb();
});
