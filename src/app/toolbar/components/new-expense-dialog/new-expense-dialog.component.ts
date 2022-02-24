import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-expense-dialog',
  templateUrl: './new-expense-dialog.component.html',
  styleUrls: ['./new-expense-dialog.component.scss'],
})
export class NewExpenseDialogComponent implements OnInit {

  //expense: Expense;
  constructor(private dialogRef: MatDialogRef<NewExpenseDialogComponent>) { }

  ngOnInit():void {
    //this.expense = new Expense();
  }

  save() {
    this.dialogRef.close(null);//this.expense)
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
