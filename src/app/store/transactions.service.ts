import { Injectable } from '@angular/core';
import { AccountTransaction } from './models/transaction';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

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

  addUser(user: AccountTransaction): Promise<AccountTransaction> {
    return new Promise((resolver, reject) => {
      user.id = this.dataStore.account_transactions.length + 1;
      this.dataStore.account_transactions.push(user);
      this._account_transactions.next(Object.assign({}, this.dataStore).account_transactions);
      resolver(user);
    })
  }

  userById(id: number) {
    return this.dataStore.account_transactions.find(x => x.id == id);
  }

  loadAll() {
    const transactionsUrl = './transactions.json'

    return this.http.get<AccountTransaction[]>(transactionsUrl)
      .subscribe(data => {
        this.dataStore.account_transactions = data;
        this._account_transactions.next(Object.assign({}, this.dataStore).account_transactions);
      }, error => {
        console.log("Failed to fetch Transactions")
      });
  }

}