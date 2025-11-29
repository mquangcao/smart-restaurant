import { CoreModule } from '@app/core';
import { Module } from '@nestjs/common';

import { getConfig } from './common';
import { AccountAuthenticateModule } from './modules/auth/auth.module';
import { PasswordAuthStrategy } from './modules/auth/strategies/password.strategy';

@Module({
  imports: [
    CoreModule.forRoot(),
    AccountAuthenticateModule.forRoot({
      jwtSecret: getConfig('token.secret'),
      jwtExpiresIn: getConfig('token.expiresIn'),
      strategies: [PasswordAuthStrategy],
    }),
  ],
})
export class AppModule {}
