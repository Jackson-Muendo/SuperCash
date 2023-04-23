import { Component } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
  fromAccount: number;
  toAccount: number;
  amount: number;

  transferFunds(){

  }

}
