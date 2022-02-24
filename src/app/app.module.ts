import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

//components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewExpenseDialogComponent } from './toolbar/components/new-expense-dialog/new-expense-dialog.component';


//services

//modules
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [AppComponent, NewExpenseDialogComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
