import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

//components
import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppRoutingModule } from './app-routing.module';

//services

//modules
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
  ],
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
