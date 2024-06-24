import { isValidObjectId } from "mongoose";

import {errorHandler} from "./errorHandler.js";

export const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(errorHandler(404, "Not found"));
  }

  next();
};
