import { IHttUserRequest } from '@shared/contracts/IHttpUserRequest';
import { IIdRequest } from '@shared/contracts/IIdRequest';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { User } from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/UserRepository';

class UpdateUserService {
  public async execute(
    { id }: IIdRequest,
    { email, name, password }: IHttUserRequest,
  ): Promise<User | undefined> {
    const updateUser = getCustomRepository(UserRepository);

    const findUser = await updateUser.findById(id);
    if (!findUser) {
      throw new AppError('User not found');
    }
    const user = updateUser.create({ email, name, password });
    await updateUser.save(user);
    return user;
  }
}
export { UpdateUserService };
