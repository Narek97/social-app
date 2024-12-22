import { Module } from '@nestjs/common';
import { UsersService } from '@/modules/users/users.service';
import { UsersResolver } from '@/modules/users/users.resolver';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [],
  exports: [UsersService],
})
export class UsersModule {}
