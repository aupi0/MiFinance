import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountTransactionListComponent } from './account-transaction-list.component';
import { MaterialModule } from '../shared/material.module';
import { TransactionsService } from '../store/transactions.service';



@NgModule({
  declarations: [AccountTransactionListComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    TransactionsService
  ],
  exports: [AccountTransactionListComponent]
})
export class TransactionsModule { }

