import { ObjectType } from '@nestjs/graphql';
import { Users } from '@Models/dbmodels/user.model';

@ObjectType()
export class LoginModel {
  user: Users;
}
