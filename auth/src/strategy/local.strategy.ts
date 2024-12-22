import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '@/modules/auth/auth.service';
import { User } from '@Models/dbmodels/user.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: string, password: string): Promise<User> {
    const user: User = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException({
        message: 'incorrect email or password',
      });
    }
    return user;
  }
}
