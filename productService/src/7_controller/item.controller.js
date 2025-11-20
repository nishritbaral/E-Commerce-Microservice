import { addService, deleteService } from "../8_service/item.service";

export const itemAddController = async () => {
  try {
    const productData = req.body;
    const response = await addService(productData);
    return res.status(200).send({ message: response.message });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Failed to add the product.", error: error.message });
  }
};

export const itemDeleteController = async () => {
  try {
    const productId = req.params.id;
    const response = await deleteService(productId);
    return res.status(200).send({ message: response.message });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Failed to delete the product,", error: error.message });
  }
};

export const itemUpdateController = () => {};
