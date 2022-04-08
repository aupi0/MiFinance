import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsListComponent } from './accounts-list.component';
import { MaterialModule } from '../shared/material.module';
import { AccountsService } from '../store/accounts.service';



@NgModule({
  declarations: [AccountsListComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    AccountsService
  ],
  exports: [AccountsListComponent]
})
export class TransactionsModule { }

