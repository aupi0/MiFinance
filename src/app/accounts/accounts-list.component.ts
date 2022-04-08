import { Component, OnInit } from '@angular/core';

import { Accounts } from '../store/models/accounts';
import groupBy from 'lodash/groupBy';
import { Dictionary } from 'lodash';
import { compareDate } from '../utils';
import { AccountsService } from '../store/accounts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements OnInit {

  accounts: Observable<Accounts[]>;
  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
    this.accountsService.loadAll();

    this.accounts.subscribe(data => {
      console.log(data);
    })
  }

}
