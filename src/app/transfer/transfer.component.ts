import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "../models/account";
import { AccountInput } from "../models/accountinput";
import { TransactionInput } from "../models/transactioninput";
import {Transfer} from '../models/transfer'
import { first } from "rxjs/operators";

import {TransactionService} from '../services/transaction.service'
import {TransferService} from '../services/transfer.service'
import {AuthenticationService} from '../services/authentication.service'

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})

export class TransferComponent {
 /* transferForm: FormGroup;
  senderBalance: number = 1000;
  recipientBalance: number = 0;
  transactionHistory: any[] = [];
  errorMessage: string;
  successMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private transferService: TransferService
  ) {
    this.transferForm = this.formBuilder.group({
      recipientName: ['', Validators.required],
      recipientAccount: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      description: ['']
    });
  }

  transfer(): void {
    // Get the values from the form
    const transfer: Transfer = this.transferForm.value;

    // Validate the form
    if (this.transferForm.invalid) {
      // Display an error message if the form is invalid
      this.errorMessage = 'Please fill in all required fields.';
      return;
    } else if (transfer.amount > this.senderBalance) {
      // Display an error message if the sender doesn't have enough funds to make the transfer
      this.errorMessage = 'Insufficient funds. Please try again with a smaller amount.';
      return;
    }

    // Make the HTTP request to transfer the funds
    this.transferService.transfer(transfer).subscribe(
      response => {
        // Update the UI with the new account balances and transaction history
        this.successMessage = 'Transfer successful!';
        this.senderBalance -= transfer.amount;
        this.recipientBalance += transfer.amount;
        this.transactionHistory.push(response);
        this.transferForm.reset();
      },
      error => {
        // Display an error message if the HTTP request fails
        this.errorMessage = 'An error occurred while processing your request. Please try again later.';
      }
    );
  }*/
}
