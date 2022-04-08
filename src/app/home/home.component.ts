import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { NewExpenseDialogComponent } from '../toolbar/components/new-expense-dialog/new-expense-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {}

  openAddExpenseDialog(): void {
    let dialogRef = this.dialog.open(NewExpenseDialogComponent, {
      width: '70%'
    })
  
    dialogRef.afterClosed().subscribe(result => {
      
    })
    
  }

  onAccounts() {
    this.router.navigate(['/accounts'])
  }

  onTransactions() {
    this.router.navigate(['/transactions'])
  }

  onAnalytics() {
    this.router.navigate(['/analytics'])
  }

}
