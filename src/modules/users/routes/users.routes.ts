/* eslint-disable prettier/prettier */
import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { celebrate, Joi, Segments } from "celebrate";

const userRoutes = Router()
const userController = new UserController()

userRoutes.get('/',userController.index)

userRoutes.post('/', celebrate({
    [Segments.BODY]:{ 
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }
}), userController.create)

export { userRoutes }