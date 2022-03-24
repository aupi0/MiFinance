import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './shared/material.module';

import { HomeComponent } from './home/home.component';
import { AccountTransactionListComponent } from './transactions/account-transaction-list.component';
import { NewExpenseDialogComponent } from './toolbar/components/new-expense-dialog/new-expense-dialog.component';
import { TransactionsService } from './store/transactions.service';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'transactions',
    component: AccountTransactionListComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //{
  //  path: '',
  //  redirectTo: 'folder/Inbox',
  //  pathMatch: 'full'
  //},
  //{
  //  path: 'folder/:id',
  //  loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  //}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    TransactionsService
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    NewExpenseDialogComponent,
    AccountTransactionListComponent,
  ]
})
export class AppRoutingModule {}
