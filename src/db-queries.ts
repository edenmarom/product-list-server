import mongoose from "mongoose";
import { Product } from "./models/product.model";
import { Order } from "./models/order.model";
import { ProductModel } from "./schemas/product";
import { OrderModel } from "./schemas/order";

export const getAllProductQuery = (): mongoose.Query<Product[], Product> => {
  return ProductModel.find();
};

export const getAllOrdersQuery = (): mongoose.Query<Product[], Product> => {
  return OrderModel.find();
};

export const createNewOrder = (order: Order): Promise<mongoose.Document> => {
  return OrderModel.create({ order: order });
};

// export const getProductsQuery = async (
//   ids: string[]
// ): Promise<Record<string, Product>> => {
//   if (ids.length > 0) {
//     const productList = await ProductModel.find({
//       _id: { $in: ids },
//     });
//     return keyBy(productList, "_id");
//   }
//   return {};
// };

// export const getProductByIDQuery = (
//   id: number
// ): mongoose.Query<Product | null, mongoose.Document, {}> => {
//   return ProductModel.findById(id);
// };

// export const createNewProductQuery = (
//   product: Product
// ): Promise<mongoose.Document> => {
//   return ProductModel.create(product);
// };

// export const updateProductQuery = (
//   id: number,
//   product: Partial<Product>
// ): mongoose.Query<any, any, any> => {
//   return ProductModel.findOneAndUpdate({ _id: id }, product, { new: true });
// };

// export const deleteProductQuery = (
//   id: number
// ): mongoose.Query<mongoose.Document | null, mongoose.Document, {}> => {
//   return ProductModel.findByIdAndDelete(id);
// };

// export const cartCheckout = async (cart: Record<string, number>) => {
//   const session = await db.startSession();
//   try {
//     await session.withTransaction(async () => {
//       await Promise.all(
//         Object.keys(cart).map((productId) =>
//           ProductModel.findByIdAndUpdate(
//             productId,
//             { $inc: { stockAmount: -cart[productId] } },
//             { session, new: true }
//           )
//         )
//       );
//     });
//   } catch (error) {
//     throw new Error(
//       "The transaction was aborted due to an unexpected error: " + error
//     );
//   } finally {
//     session.endSession();
//   }
// };
