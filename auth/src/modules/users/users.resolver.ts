import { Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '@/modules/users/users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
