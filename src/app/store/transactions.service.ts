import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


import { AccountTransaction } from './models/transaction';

@Injectable()
export class TransactionsService {

  private _account_transactions: BehaviorSubject<AccountTransaction[]>;

  private dataStore: {
    account_transactions: AccountTransaction[];
  }

  constructor(private http: HttpClient) {
    this.dataStore = { account_transactions: [] };
    this._account_transactions = new BehaviorSubject<AccountTransaction[]>([]);
  }

  get account_transactions(): Observable<AccountTransaction[]> {
    return this._account_transactions.asObservable();
  }

  addAccountTransaction(account_transaction: AccountTransaction): Promise<AccountTransaction> {
    return new Promise((resolver, reject) => {
      account_transaction.id = this.dataStore.account_transactions.length + 1;
      this.dataStore.account_transactions.push(account_transaction);
      this._account_transactions.next(Object.assign({}, this.dataStore).account_transactions);
      resolver(account_transaction);
    })
  }

  AccountTransactionById(id: number) {
    return this.dataStore.account_transactions.find(x => x.id == id);
  }

  loadAll() {
    const transactionsUrl = 'assets/transactions.json'

    return this.http.get<AccountTransaction[]>(transactionsUrl)
      .subscribe(data => {
        this.dataStore.account_transactions = data;
        this._account_transactions.next(Object.assign({}, this.dataStore).account_transactions);
      }, error => {
        console.log("Failed to fetch Transactions with error:", error)
      });
  }

}