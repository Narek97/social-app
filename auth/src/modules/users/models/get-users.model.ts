import { ObjectType } from '@nestjs/graphql';
import { Users } from '@Models/dbmodels/user.model';
import { PaginationModel } from '@/common/models/pagination.model';

@ObjectType()
export class GetUsersModel extends PaginationModel {
  users: Users[];
}
