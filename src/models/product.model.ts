import { Mongoose } from "mongoose";
import mongoose from "mongoose";

export interface Product extends mongoose.Document {
  name: string;
  price: number;
  imgUrl: string;
  description: string;
  rating: number;
  stockAmount: number;
  imgUrl2: string;
}
