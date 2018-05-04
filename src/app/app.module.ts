import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';
import { InvoiceModalComponent } from './invoice-modal/invoice-modal.component';
import { InvoiceTableComponent } from './invoice-table/invoice-table.component';

import { InvoiceDataService } from './invoice-data.service';
import { LoginDataService } from './login-data.service';
import { AboutGuard } from './guard';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'invoice', component: InvoicePageComponent, canActivate: [AboutGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InvoicePageComponent,
    InvoiceModalComponent,
    InvoiceTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    StorageServiceModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AboutGuard,
    LoginDataService,
    InvoiceDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
