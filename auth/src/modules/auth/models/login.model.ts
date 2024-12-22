import { ObjectType } from '@nestjs/graphql';
import { User } from '@Models/dbmodels/user.model';

@ObjectType()
export class LoginModel {
  user: User;
  accessToken: string;
  refreshToken: string;
}
