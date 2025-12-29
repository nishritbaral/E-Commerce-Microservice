import productTable from "../3_models/product.schema";

export const itemAddService = async (productData, loggedInUserId) => {
  const sellerId = loggedInUserId;
  productData = { ...productData, sellerId };
  await productTable.createOne(productData);
  return { message: "Product Addded Successfully." };
};

export const itemDeleteService = async (productId, loggedInUserId) => {
  const productData = productTable.findById(productId);

  if (!productData) {
    return { message: "Product doesnt exist." };
  }

  if (loggedInUserId !== productData.sellerId) {
    return { message: "Product doesnt belong to the User." };
  }

  await productTable.deleteOne({ _id: productId });
  return { message: "Product Deleted Successfully." };
};

export const itemUpdateService = () => {};
