import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Transfer } from '../models/transfer';


@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: HttpClient, private router: Router) {}
createSend(recipientAccount: Number,  amount : Number){
    const authData  = {recipientAccount: recipientAccount,amount: amount};
    this.http.post("http://localhost:3000/api/send/send-money",authData)
      .subscribe(response =>{
        console.log(response);
      });
}
}