import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from '@/modules/auth/auth.service';
import { UseGuards } from '@nestjs/common';
import { SigninInput } from '@/modules/auth/inputs/signin.input';
import { GqlAuthGuard } from '@/guards/local-auth.guard';
import { LoginModel } from '@/modules/auth/models/login.model';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';
import { CurrentUser } from '@/decorators/current-user.decorator';
import { User } from '@Models/dbmodels/user.model';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginModel)
  @UseGuards(GqlAuthGuard)
  async signin(
    @Args('loginUserInput') loginUserInput: SigninInput,
    @Context() context: any,
  ): Promise<any> {
    return this.authService.signin(context.user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => User)
  async getMe(@CurrentUser() user: User) {
    return user;
  }
}
