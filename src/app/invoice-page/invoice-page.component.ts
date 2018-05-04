import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';
import { InvoiceDataService } from '../invoice-data.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.css']
})
export class InvoicePageComponent implements OnInit {

  searchStringControl = new FormControl();
  formCtrlSub: Subscription;
  isModalInvoiceOpen = false;
  searchSring = '';
  invoiceList = [];

  constructor(private invoiceDataService: InvoiceDataService) {
    this.invoiceList = invoiceDataService.invoiceList;
  }

  ngOnInit() {
    this.formCtrlSub = this.searchStringControl.valueChanges
      .debounceTime(300)
      .subscribe(newValue => {
        this.searchSring = newValue;
        this.filterTable()
      });
  }

  filterTable() {
    this.invoiceList = this.searchSring
      ? this.invoiceDataService.invoiceList.filter(item => item.toLowerCase()
          .includes(this.searchSring.toLowerCase()))
      : this.invoiceDataService.invoiceList
  }

  addOrRemoveHeandler(type, index, name) {
    this.invoiceDataService.addOrRemoveHeandler(type, index, name);
  }

  modalChangeHeandler() {
    this.isModalInvoiceOpen = !this.isModalInvoiceOpen;
  }
}
