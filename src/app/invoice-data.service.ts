import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable()
export class InvoiceDataService {

  invoiceList = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.invoiceList = this.storage.get('invoiceList') || [];
  }

  addOrRemoveHeandler(type, index, name) {
    type === "add"
      ? this.invoiceList.splice(index, 0, name)
      : this.invoiceList.splice(index, 1);
    this.storage.set('invoiceList', this.invoiceList);
  }

}
