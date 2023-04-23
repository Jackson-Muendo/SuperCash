import { Component } from '@angular/core';
//import {TransactionService} from '../app/services/transaction.service'
//import {TransferService} from '../app/services/transfer.service'


@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent {
  fromAccount: number;
  toAccount: number;
  amount: number;

  constructor() {}

  transferFunds() {
    
  }
}