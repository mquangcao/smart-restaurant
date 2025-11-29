import { DynamicModule, Module, type Provider } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AUTH_STRATEGIES } from './constants';
import { AccountAuthenticateController } from './controllers/auth.controller';
import { RefreshTokenEntity } from './entities/refresh-token.entity';
import { UserEntity } from './entities/user.entity';
import { UserRoleToTokenRoleMapper } from './mapper/token-role.mapper';
import { AccountAuthenticateService } from './services/account-authenticate.service';
import { AccountTokenService } from './services/account-token.service';
import { AccountUserService } from './services/account-user.service';
import type { BaseStrategy } from './strategies';
import { PasswordAuthStrategy } from './strategies/password.strategy';

export interface AuthenticateModuleOptions {
  jwtSecret: string;
  jwtExpiresIn?: number;
  strategies: Provider<BaseStrategy>[];
}

@Module({})
export class AccountAuthenticateModule {
  static forRoot(options: AuthenticateModuleOptions): DynamicModule {
    const strategies = options.strategies || [PasswordAuthStrategy];
    return {
      module: AccountAuthenticateModule,
      imports: [
        TypeOrmModule.forFeature([RefreshTokenEntity, UserEntity]),
        JwtModule.register({
          secret: options.jwtSecret,
          signOptions: { expiresIn: '3000' },
        }),
      ],
      controllers: [AccountAuthenticateController],
      providers: [
        AccountAuthenticateService,
        AccountTokenService,
        UserRoleToTokenRoleMapper,
        AccountUserService,
        PasswordAuthStrategy,

        {
          provide: AUTH_STRATEGIES,
          useFactory: (...strategies: BaseStrategy[]) => strategies,
          inject: [...(strategies as any)],
        },
      ],
      exports: [
        AccountAuthenticateService,
        AccountTokenService,
        UserRoleToTokenRoleMapper,
        TypeOrmModule,
        AUTH_STRATEGIES,
      ],
    };
  }

  static forFeature(strategies: any[]): DynamicModule {
    return {
      module: AccountAuthenticateModule,
      providers: [...strategies],
      exports: [...strategies],
    };
  }
}
