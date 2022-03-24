import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NewExpenseDialogComponent } from './toolbar/components/new-expense-dialog/new-expense-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {

  }

  openAddExpenseDialog(): void {
    let dialogRef = this.dialog.open(NewExpenseDialogComponent, {
      width: '70%'
    })
  
    dialogRef.afterClosed().subscribe(result => {
      
    })
    
  }
}

