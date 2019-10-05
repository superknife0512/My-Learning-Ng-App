import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
