import { initDb } from "./db";
import { 
  getAllProductQuery, 
  getAllOrdersQuery, 
  createNewOrder 
} from "./db-queries";
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  initDb();
});

app.get("/getAllProducts", async (req, res) => {
  const products: mongoose.Document[] = await getAllProductQuery();
  res.send(products);
});

app.get("/getAllOrders", async (req, res) => {
  const orders: mongoose.Document[] = await getAllOrdersQuery();
  res.send(orders);
});

app.post("/newOrder",async (req, res) => {
  await createNewOrder(req.body);
  res.send("Checkout Ended Successfully.");
});
