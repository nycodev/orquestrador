import { Injectable } from '@nestjs/common';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


@Injectable()
export class TwilioService {
  getHello(): string {
    return 'Hello World!';
  }
}
