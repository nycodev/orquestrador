import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TwilioService } from './twilio.service';



@Module({
  imports: [],
  controllers: [AppController],
  providers: [TwilioService],
})
export class AppModule {}
