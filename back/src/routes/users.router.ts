import { Request, Response, Router } from "express";
import validateUserRegister from "../middlewares/userRegister.middleware";
import { login, registerUser } from "../controllers/user.controller";
import checkLogin from "../middlewares/checkLogin.middleware";
import { OrderRepository } from "../repositories/order.repository";
import { validateLogin } from "../middlewares/userLogin.middleware";

const usersRouter = Router();

usersRouter.post("/register", validateUserRegister, registerUser);

usersRouter.post("/login", validateLogin, login);

usersRouter.get("/orders", checkLogin, async (req: Request, res: Response) => {
  const { userId } = req.body;
  const orders = await OrderRepository.find({
    relations: ["products"],
    where: { user: { id: userId } },
  });

  res.send(orders);
});

export default usersRouter;
