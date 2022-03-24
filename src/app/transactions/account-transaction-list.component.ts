import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

import { AccountTransaction } from '../store/models/transaction';
import groupBy from 'lodash/groupBy';
import { Dictionary } from 'lodash';
import { compareDate } from '../utils';
import { TransactionsService } from '../store/transactions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-transaction-list',
  templateUrl: './account-transaction-list.component.html',
  styleUrls: ['./account-transaction-list.component.scss'],
  //encapsulation: ViewEncapsulation.None,
  //changeDetection: ChangeDetectionStrategy.OnPush,
  //host: {
  //  class: 'account-transaction-list'
  //}
})
export class AccountTransactionListComponent implements OnInit {

  groupByAccountTransactions!: Dictionary<AccountTransaction[]>;
  transactionDates: string[] = [];

  transactions: Observable<AccountTransaction[]>;
  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.transactions = this.transactionsService.account_transactions;
    this.transactionsService.loadAll();

    this.transactions.subscribe(data => {
      this.groupByAccountTransactions = groupBy(data, 'date');
      this.transactionDates = Object.keys(this.groupByAccountTransactions).sort(compareDate);
      console.log(data);
    })
  }
}
