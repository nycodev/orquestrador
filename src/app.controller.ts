import { Controller, Get, Post } from '@nestjs/common';
import { TwilioService } from './twilio.service';

@Controller()
export class AppController {
  constructor(private readonly twilioService: TwilioService) {}

  @Get('twilio-send')
  sendMessageTwilio(): Promise<any> {
    this.twilioService.sendMessageTwilio();
    return 
  }
}
