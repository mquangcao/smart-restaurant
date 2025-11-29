import { getConfig } from '@app/common';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { v4 as uuidv4 } from 'uuid';

import { UserEntity } from '../entities/user.entity';
import { TokenRole } from '../enums';
import { TokenPayload } from '../interfaces';

export interface GeneratedTokens {
  accessToken: string;
  refreshToken: string;
  refreshId: string;
  expiresIn: number;
}

@Injectable()
export class AccountTokenService {
  private readonly ACCESS_TOKEN_EXPIRES_IN = getConfig('account.token.expiresIn');
  private readonly REFRESH_TOKEN_EXPIRES_IN = getConfig('account.token.refreshExpiresIn');

  constructor(private readonly jwtService: JwtService) {}

  async generateTokens(
    user: UserEntity,
    tokenRole: TokenRole,
    method: string,
  ): Promise<GeneratedTokens> {
    const payload: any = {
      sub: user.id,
      tokenRole,
      method,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: this.ACCESS_TOKEN_EXPIRES_IN,
    });

    const refreshId = uuidv4();

    return {
      accessToken,
      refreshToken: refreshId,
      refreshId,
      expiresIn: this.ACCESS_TOKEN_EXPIRES_IN,
    };
  }

  async verifyAccessToken(token: string): Promise<TokenPayload> {
    return this.jwtService.verifyAsync(token);
  }

  getRefreshTokenExpiresIn(): number {
    return this.REFRESH_TOKEN_EXPIRES_IN;
  }
}
