import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Accounts } from './models/accounts';

@Injectable()
export class AccountsService {

  private _accounts: BehaviorSubject<Accounts[]>;

  private dataStore: {
    accounts: Accounts[];
  }

  constructor(private http: HttpClient) {
    this.dataStore = { accounts: [] };
    this._accounts = new BehaviorSubject<Accounts[]>([]);
  }

  get accounts(): Observable<Accounts[]> {
    return this._accounts.asObservable();
  }

  addAccount(account: Accounts): Promise<Accounts> {
    return new Promise((resolver, reject) => {
      account.id = this.dataStore.accounts.length + 1;
      this.dataStore.accounts.push(account);
      this._accounts.next(Object.assign({}, this.dataStore).accounts);
      resolver(account);
    })
  }

  AccountById(id: number) {
    return this.dataStore.accounts.find(x => x.id == id);
  }

  loadAll() {
    const accountsUrl = 'assets/accounts.json'

    return this.http.get<Accounts[]>(accountsUrl)
      .subscribe(data => {
        this.dataStore.accounts = data;
        this._accounts.next(Object.assign({}, this.dataStore).accounts);
      }, error => {
        console.log("Failed to fetch Accounts with error:", error)
      });
  }

}