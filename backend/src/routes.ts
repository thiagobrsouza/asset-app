import { Router } from "express";
import { customerRoute } from "./controllers/CustomerController";
import { manufacturerRoute } from "./controllers/ManufacturerController";
import { categoryRoute } from "./controllers/CategoryController";
import { assetModelRoute } from "./controllers/AssetModelController";

export const routes = Router();

/**
 * routes here
 */
routes.use(customerRoute);
routes.use(manufacturerRoute);
routes.use(categoryRoute);
routes.use(assetModelRoute);