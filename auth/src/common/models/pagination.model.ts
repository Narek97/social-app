import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaginationModel {
  limit: number;
  offset: number;
  count?: number;
}
