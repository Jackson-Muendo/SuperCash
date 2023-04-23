import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Transfer } from '../models/transfer';

export class TransferService {
  private apiUrl = 'http://localhost:3000/transfers';

  constructor(private http: HttpClient) {}

  transferFunds(fromAccount: number, toAccount: number, amount: number): Observable<Transfer> {
    const transfer = { fromAccount, toAccount, amount };
    return this.http.post<Transfer>(this.apiUrl, transfer)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error.error.message);
    return throwError('Something bad happened; please try again later.');
  }
}