import { Injectable } from '@nestjs/common';
import { Users } from '@Models/dbmodels/user.model';

@Injectable()
export class UsersService {
  async findOne(email: string): Promise<Users> {
    return Users.findOne({ where: { email }, raw: true });
  }
}
