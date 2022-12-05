import mongoose from "mongoose";
import { Product } from "../models/product.model";

const ProductSchema: mongoose.Schema<Product> = new mongoose.Schema({
  name: String,
  price: Number,
  imgUrl: String,
  description: String,
  rating: Number,
  stockAmount: Number,
  imgUrl2: String
});

export const ProductModel = mongoose.model<Product>("Product", ProductSchema);
