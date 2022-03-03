import { Injectable } from '@nestjs/common';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


let msgText = 'Buenas!'
let recipient = process.env.TEST_RECIPIENT


@Injectable()
export class TwilioService {
  async sendMessageTwilio(): Promise<any> {
    const client = require('twilio')(accountSid, authToken)

    try {
      await client.messages
      .create({
         from: process.env.TWILIO_NUMBER,
         body: msgText,
         to: recipient
       })
      .then(message => console.log(message.sid));
    } catch (error) {
      console.log(error)
    }
  }
}
