import { Injectable } from '@nestjs/common';
import { User } from '@Models/dbmodels/user.model';

@Injectable()
export class UsersService {
  async getUserByEmail(email: string): Promise<User> {
    return User.findOne({ where: { email }, raw: true });
  }
}
