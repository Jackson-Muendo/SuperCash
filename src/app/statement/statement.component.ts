import { Component } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent {
  fromAccount: number;
  toAccount: number;
  amount: number;

  constructor() {}

  transferFunds() {
    
  }

}
