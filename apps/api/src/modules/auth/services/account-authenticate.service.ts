import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { AUTH_STRATEGIES } from '../constants';
import { LoginRequestDto } from '../dtos/login-request.dto';
import { LoginResponseDto } from '../dtos/login-response.dto';
import { RefreshTokenEntity } from '../entities/refresh-token.entity';
import { IAuthStrategy } from '../interfaces/auth-strategy.interface';
import { UserRoleToTokenRoleMapper } from '../mapper/token-role.mapper';
import { AccountTokenService } from './account-token.service';

@Injectable()
export class AccountAuthenticateService {
  constructor(
    @Inject(AUTH_STRATEGIES) private readonly strategies: IAuthStrategy[],
    @InjectRepository(RefreshTokenEntity)
    private readonly refreshTokenRepository: Repository<RefreshTokenEntity>,
    private readonly tokenService: AccountTokenService,
    private readonly mapper: UserRoleToTokenRoleMapper,
  ) {}

  async login(
    dto: LoginRequestDto,
    userAgent?: string,
    ipAddress?: string,
  ): Promise<LoginResponseDto> {
    const strategy = this.strategies.find(s => s.method === dto.method);
    if (!strategy) {
      throw new BadRequestException(`Unsupported authentication method: ${dto.method}`);
    }

    const user = await strategy.validate(dto.data);
    const tokenRole = this.mapper.map(user.role);

    const { accessToken, refreshToken, refreshId, expiresIn } =
      await this.tokenService.generateTokens(user, tokenRole, dto.method);

    const refreshTokenExpiresAt = new Date(
      Date.now() + this.tokenService.getRefreshTokenExpiresIn() * 1000,
    );

    await this.refreshTokenRepository.save({
      id: refreshId,
      userId: user.id,
      tokenRole,
      expiresAt: refreshTokenExpiresAt,
      userAgent,
      ipAddress,
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      token_role: tokenRole,
      expires_in: expiresIn,
    };
  }
}
