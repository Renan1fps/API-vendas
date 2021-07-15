/* eslint-disable prettier/prettier */
import { IHttUserRequest } from "@shared/contracts/IHttpUserRequest";
import { AppError } from "@shared/errors/AppError";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { User } from "../typeorm/entities/User";
import { UserRepository } from "../typeorm/repositories/UserRepository";




class CreateUserService{

    public async execute({name, email, password}:IHttUserRequest): Promise<User | undefined>{

        const userRepository = getCustomRepository(UserRepository)

        const existsEmail = await userRepository.findByEmail(email)
        if(existsEmail){
            throw new AppError('This email is already being used')
        }

        const hashPassword = await hash(email, 8)

        const user = await userRepository.create({
            name, email, password: hashPassword
        })

        await userRepository.save(user)

        return user
    }
}

export { CreateUserService }