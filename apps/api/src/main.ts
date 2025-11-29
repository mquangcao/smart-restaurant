import { getConfig, setupBootstrap } from '@app/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: getConfig('allowOriginUrl'),
    methods: '*',
    credentials: true,
  });

  await setupBootstrap(app);
}
bootstrap();
