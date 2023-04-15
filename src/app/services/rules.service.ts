import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Account } from "../models/account";
import { Customer } from "../models/customer";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RulesService {
  constructor(private http: HttpClient) {}

  evaluateMinBal() {
   
  }
  getServiceCharges(){
      return this.http.get<Account[]>(`http://localhost:8086/account-ms/getAccount/10054546`);
  }



}
