import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// important for passport use username and password variables, for example username cant be email
@InputType()
export class SigninInput {
  @Field()
  @IsEmail({}, { message: 'Invalid email format' })
  username: string;

  @Field()
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
