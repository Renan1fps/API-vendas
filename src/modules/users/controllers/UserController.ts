/* eslint-disable prettier/prettier */
import { IHttUserRequest } from "@shared/contracts/IHttpUserRequest";
import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { ListUserService } from "../services/ListUserService";

class UserController{
    public async index(request: Request, response: Response):Promise<Response>{
        const listUser= new ListUserService()

        const users = await listUser.execute()
        return response.status(200).json(users)
    }
    public async create(request: Request, response: Response):Promise<Response>{
        const { name, email, password } = request.body

        const createUser= new CreateUserService()

        const user = await createUser.execute({name, email, password}as IHttUserRequest)
        return response.status(200).json(user)
    }
}

export { UserController }