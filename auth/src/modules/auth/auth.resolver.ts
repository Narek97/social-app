import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '@/modules/auth/auth.service';
import { UseGuards } from '@nestjs/common';
import { SigninInput } from '@/modules/auth/inputs/signin.input';
import { GqlAuthGuard } from '@/guards/local-auth.guard';
import { LoginModel } from '@/modules/auth/models/login.model';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginModel)
  @UseGuards(GqlAuthGuard)
  async signin(
    @Args('loginUserInput') loginUserInput: SigninInput,
    @Context() context,
  ): Promise<any> {
    return {
      user: context.user,
    };
  }
}
