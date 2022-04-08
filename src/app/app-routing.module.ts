import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/material.module';

import { AccountsListComponent } from './accounts/accounts-list.component';
import { HomeComponent } from './home/home.component';
import { AccountTransactionListComponent } from './transactions/account-transaction-list.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { NewExpenseDialogComponent } from './toolbar/components/new-expense-dialog/new-expense-dialog.component';
import { AccountsService } from './store/accounts.service';
import { TransactionsService } from './store/transactions.service';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'accounts',
    component: AccountsListComponent
  },
  {
    path: 'transactions',
    component: AccountTransactionListComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    TransactionsService,
    AccountsService,
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    NewExpenseDialogComponent,
    AccountsListComponent,
    AccountTransactionListComponent,
    AnalyticsComponent,
  ]
})
export class AppRoutingModule {}
