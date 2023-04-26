import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Transfer } from '../models/transfer';


@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private apiUrl = 'http://localhost:3000/transfers';

  constructor(private http: HttpClient) {}

  transfer(transfer: Transfer): Observable<any> {
    return this.http.post<any>(this.apiUrl, transfer);
  }
}
