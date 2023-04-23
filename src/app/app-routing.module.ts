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
import {RouteslinkComponent} from './routeslink/routeslink.component';

const routes: Routes = [
{path: 'balance', component: BalanceComponent},
{path: 'send-cash',component: TransferComponent},
{path: 'pay-cash',component: PayComponent},
{path: 'super-cash-statement',component: StatementComponent},
{path: 'recruit-members',component: RecruitComponent},
{path: 'withdraw-cash',component: WithdrawComponent},
{path: 'send-commission',component: TransfersComponent},
{path: 'pay-commission',component: PaysComponent},
{path: 'withdraw-commission',component: WithdrawsComponent},
{path: 'commission-Statement',component: StatementsComponent},
{path: 'your-mini-super-cash',component: MinisupercashComponent},
{path: 'super-cash',component: RouteslinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
