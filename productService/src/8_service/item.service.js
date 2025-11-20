import productTable from "../3_models/product.schema";

export const itemAddService = async (productData) => {
  // add the loggedin seller id at the end of product list
  await productTable.createOne(productData);
  return { message: "Product Addded Successfully." };
};

export const itemDeleteService = async (productId) => {
  // verify the product belongs to the loggedin seller with the seller id in the product table
  await productTable.deleteOne({ _id: productId });
  return { message: "Product Deleted Successfully." };
};

export const itemUpdateService = () => {};
