import mongoose from "mongoose";

export interface orderProduct extends mongoose.Document {
  name: string;
  price: number;
  count: number;
}