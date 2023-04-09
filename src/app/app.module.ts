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
    RecruitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
