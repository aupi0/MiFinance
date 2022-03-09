import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './shared/material.module';

import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NewExpenseDialogComponent } from './toolbar/components/new-expense-dialog/new-expense-dialog.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'transactions',
    component: TransactionsComponent
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
    MaterialModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    NewExpenseDialogComponent,
  ]
})
export class AppRoutingModule {}
