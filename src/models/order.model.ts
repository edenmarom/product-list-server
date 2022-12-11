import mongoose from "mongoose";
import { orderProduct } from "./orderProduct.model";

export interface Order extends mongoose.Document {
  order: Array<orderProduct> ;
}
