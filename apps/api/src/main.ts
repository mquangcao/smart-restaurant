import { getConfig, setupBootstrap } from '@app/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: getConfig('allowOriginUrl'),
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });

  console.log('CORS ORIGIN:', getConfig('allowOriginUrl'));

  await setupBootstrap(app);
}
bootstrap();
