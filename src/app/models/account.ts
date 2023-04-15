import { Transaction } from "./transaction";
export interface Account {

accountId: number;
customerId:string;
currentBalance:number;
accountType:string;
ownerName:string;
transactions?: [Transaction];
    
}