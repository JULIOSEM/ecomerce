import { Router } from "express";
import { getProductByid, getProducts } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductByid)

export default router;
