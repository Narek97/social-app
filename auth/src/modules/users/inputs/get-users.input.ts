import { InputType } from '@nestjs/graphql';
import { PaginationInput } from '@/common/inputs/pagination.input';

@InputType()
export class GetUsersInput extends PaginationInput {}
