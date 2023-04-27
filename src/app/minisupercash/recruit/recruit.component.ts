import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { twilioConfig } from '../../../../config';

@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.css']
})
export class RecruitComponent {
  phoneNumber: number;
  codeSent: number;

constructor(private http: HttpClient) {}

sendCode() {
  const code = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit code
  this.codeSent = code;
  const message = `Your verification code is ${code}.`; // Message to be sent
  const url = `https://api.twilio.com/2010-04-01/Accounts/${twilioConfig.accountSid}/Messages.json`; // Twilio API endpoint
  const body = {
    To: `+${this.phoneNumber}`, // Phone number to send the message to
    From: `${twilioConfig.fromNumber}`,
    Body: message // Message body
  };
  const headers = {
      Authorization: `Basic ${twilioConfig.authToken}` // Twilio authorization token
  };
  this.http.post(url, body, { headers }).subscribe(response => {
    console.log(response); // Log the response
  });
}
}

