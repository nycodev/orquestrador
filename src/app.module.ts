import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TwilioService } from './app.service';
require('dotenv').config()


@Module({
  imports: [],
  controllers: [AppController],
  providers: [TwilioService],
})
export class AppModule {}
