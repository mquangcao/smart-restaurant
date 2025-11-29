import { CoreModule } from '@app/core';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoreModule.forRoot()],
})
export class AppModule {}
