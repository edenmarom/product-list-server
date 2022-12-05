import mongoose from "mongoose";
import { db } from "./db";
import { Product } from "./models/product.model";
import { ProductModel } from "./schemas/product";
import { keyBy } from "lodash";

export const getAllProductQuery = (): mongoose.Query<Product[], Product> => {
  return ProductModel.find();
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
