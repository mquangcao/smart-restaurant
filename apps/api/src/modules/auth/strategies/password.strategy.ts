import { PasswordHash } from '@app/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UserEntity } from '../entities/user.entity';
import { LoginMethod } from '../interfaces';
import { AccountUserService } from '../services/account-user.service';
import { BaseStrategy } from './base.strategy';

@Injectable()
export class PasswordAuthStrategy extends BaseStrategy {
  method = LoginMethod.PASSWORD;

  constructor(private readonly userService: AccountUserService) {
    super();
  }

  async validate(data: { username: string; password: string }): Promise<UserEntity> {
    const { username, password } = data;

    if (!username || !password) {
      throw new UnauthorizedException('Username and password are required');
    }

    const user = await this.userService.findByUsernameOrEmail(username);

    if (!user || !user.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = this.comparePasswords(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  private comparePasswords(plainPassword: string, hashedPassword: string): boolean {
    return PasswordHash.comparePassword(plainPassword, hashedPassword);
  }
}
