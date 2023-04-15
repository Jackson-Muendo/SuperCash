import { Account } from "./account";

export interface Customer {
    accounts?: [Account];
    address: string;
    dateOfBirth: string;
    pan:string;
    password:string;
    userid:string;
    username:string;
}