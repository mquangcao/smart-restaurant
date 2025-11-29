import { ApiProperty } from '@nestjs/swagger';

import { Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsObject } from 'class-validator';

import { LoginMethod } from '../interfaces';

export class LoginRequestDto {
  @ApiProperty({
    description: 'Authentication method to use for login',
    enum: LoginMethod,
    example: LoginMethod.PASSWORD,
  })
  @IsEnum(LoginMethod)
  @IsNotEmpty()
  @Expose()
  method: LoginMethod;

  @ApiProperty({
    description: "Authentication method's data",
    example: {
      username: 'admin@example.com',
      password: 'admin12345',
    },
  })
  @IsObject()
  @IsNotEmpty()
  @Expose()
  data: any;
}
