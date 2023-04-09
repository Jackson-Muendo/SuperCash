import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    TransferComponent,
    PayComponent,
    WithdrawComponent,
    StatementComponent,
    MinisupercashComponent,
    CommissionComponent,
    RecruitComponent,
    TransfersComponent,
    PaysComponent,
    WithdrawsComponent,
    StatementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
