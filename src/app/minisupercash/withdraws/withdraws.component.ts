import { Component } from '@angular/core';

@Component({
  selector: 'app-withdraws',
  templateUrl: './withdraws.component.html',
  styleUrls: ['./withdraws.component.css']
})
export class WithdrawsComponent {
  fromAccount: number;
  toAccount: number;
  amount: number;

  constructor() {}

  transferFunds() {
    
  }


}
