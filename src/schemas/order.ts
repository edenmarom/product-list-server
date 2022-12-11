import mongoose from "mongoose";
import { Order } from "../models/order.model";
import { orderProduct } from "../models/orderProduct.model";


const OrderSchema: mongoose.Schema<Order> = new mongoose.Schema({
  order: Array<orderProduct> 
});

export const OrderModel = mongoose.model<Order>("Order", OrderSchema);