import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from '@/modules/users/users.service';
import { User } from '@Models/dbmodels/user.model';
import { LoginModel } from '@/modules/auth/models/login.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signin(user: User): Promise<LoginModel> {
    const { accessToken, refreshToken } = await this.generateToken(user);

    if (!accessToken) {
      throw new InternalServerErrorException();
    }
    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  async generateToken(
    user: User,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    try {
      const payload = {
        id: user.id,
        email: user.email,
      };

      return {
        accessToken: this.jwtService.sign(payload, {
          expiresIn: '1h',
        }),
        refreshToken: this.jwtService.sign(payload, {
          expiresIn: '30d',
        }),
      };
    } catch (err) {
      throw err;
    }
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.getUserByEmail(email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
