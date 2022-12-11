import mongoose from "mongoose";
import { orderProduct } from "../models/orderProduct.model";

const orderProductSchema: mongoose.Schema<orderProduct> = new mongoose.Schema({
  name: String,
  price: Number,
  count: Number
});

export const ProductModel = mongoose.model<orderProduct>("orderProduct", orderProductSchema);
