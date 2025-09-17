import userTable from "../3_models/user.schema.js";
import { extractPayload } from "../6_utils/jwt.js";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  try {
    const payload = extractPayload(token);

    const user = await userTable.findById(payload.id);
    if (!user) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    req.loggedInUser = {
      id: user._id,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
};

export default authMiddleware;
