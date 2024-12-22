import { InputType } from '@nestjs/graphql';

@InputType()
export class PaginationInput {
  limit: number;
  offset: number;
}
