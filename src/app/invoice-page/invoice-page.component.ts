import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoice-page',
  templateUrl: './invoice-page.component.html',
  styleUrls: ['./invoice-page.component.css']
})

export class InvoicePageComponent implements OnInit {

  searchStringControl = new FormControl();
  formCtrlSub: Subscription;
  searchString = '';
  invoiceList = [];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.formCtrlSub = this.searchStringControl.valueChanges
      .debounceTime(300)
      .subscribe(newValue => {
        this.searchString = newValue;
      });
  }
}
