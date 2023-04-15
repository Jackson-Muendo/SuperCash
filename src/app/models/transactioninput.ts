import { AccountInput } from "./accountinput";

export interface TransactionInput {
  sourceAccount: AccountInput;
  targetAccount: AccountInput;
  amount: number;
}
