import { forwardRef, Module } from '@nestjs/common';
import { AuthResolver } from '@/modules/auth/auth.resolver';
import { AuthService } from '@/modules/auth/auth.service';
import { UsersModule } from '@/modules/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from '@/strategy/local.strategy';

@Module({
  imports: [
    ConfigModule,
    forwardRef(() => UsersModule),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        signOptions: {
          expiresIn: '10h',
        },
        // secret: `Todo-Protect Me`,
        // secret: process.env.JWT_SECRET,
        secret: configService.get('JWT_SECRET'),
      }),
    }),
  ],
  providers: [AuthService, AuthResolver, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
