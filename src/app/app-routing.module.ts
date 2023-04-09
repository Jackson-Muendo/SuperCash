import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { TransferComponent } from './transfer/transfer.component';
import { PayComponent } from './pay/pay.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { StatementComponent } from './statement/statement.component';
import { MinisupercashComponent } from './minisupercash/minisupercash.component';
import { CommissionComponent } from './minisupercash/commission/commission.component';
import { RecruitComponent } from './minisupercash/recruit/recruit.component';
import { TransfersComponent } from './minisupercash/transfers/transfers.component';
import { PaysComponent } from './minisupercash/pays/pays.component';
import { WithdrawsComponent } from './minisupercash/withdraws/withdraws.component';
import { StatementsComponent } from './minisupercash/statements/statements.component';

const routes: Routes = [
{path: '', component: AppComponent  },
{path: 'balance', component: BalanceComponent},
{path: 'sendCash',component: TransferComponent},
{path: 'payCash',component: TransferComponent},
{path: 'superCashStatement',component: StatementComponent},
{path: 'recruit',component: RecruitComponent},
{path: 'withdrawCash',component: WithdrawComponent},
{path: 'sendCommission',component: TransfersComponent},
{path: 'payCommission',component: PaysComponent},
{path: 'withdrawCommission',component: WithdrawsComponent},
{path: 'commission-Statement',component: StatementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
