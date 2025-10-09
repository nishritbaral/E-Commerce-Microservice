import { addService } from "../8_service/product.service";

export const addController = async () => {
  try {
    const response = await addService();
    return res.status(200).send({ message: response.message });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Failed to add the product.", error: error.message });
  }
};

export const deleteController = () => {};

export const updateController = () => {};
