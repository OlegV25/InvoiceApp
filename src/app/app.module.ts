import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';
import { InvoiceModalComponent } from './invoice-modal/invoice-modal.component';
import { InvoiceTableComponent } from './invoice-table/invoice-table.component';
import { InvoiceRowComponent } from './invoice-row/invoice-row.component';

import { LoginDataService } from './services/login-data.service';
import { InvoiceService } from './services/invoice.service';

import { AppRouter } from './app.routing';
import { AboutGuard } from './guard';

import './rxjs-operators';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InvoicePageComponent,
    InvoiceModalComponent,
    InvoiceTableComponent,
    InvoiceRowComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    StorageServiceModule,
    AppRouter
  ],
  providers: [
    AboutGuard,
    LoginDataService,
    InvoiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
