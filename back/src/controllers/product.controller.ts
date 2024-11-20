import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { checkProductExists, getProductsByIdService, getProductsService } from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductByid = catchedController(
  async (req:Request, res: Response) => {
    const {id} = req.params
    const productid = Number(id)
    const product = await getProductsByIdService(productid)
    res.json(product)
  }
)
