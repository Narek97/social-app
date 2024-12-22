import { Injectable } from '@nestjs/common';
import { UsersService } from '@/modules/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...result } = user; // Rename password to _unused to indicate it’s intentionally unused
      return result;
    }
    return null;
  }
}
