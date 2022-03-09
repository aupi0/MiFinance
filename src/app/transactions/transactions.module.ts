import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsComponent } from './transactions.component';
import { AccountTransactionListComponent } from './account-transaction-list.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [TransactionsComponent, AccountTransactionListComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [TransactionsComponent, AccountTransactionListComponent]
})
export class TransactionsModule { }

