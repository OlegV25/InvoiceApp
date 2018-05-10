import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Invoice } from '../models/invoice.model';
import { InvoiceService } from '../services/invoice.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit, OnDestroy, OnChanges {

  visibleInvoices: Invoice[] = [];
  invoiceList: Invoice[] = [];
  todosSubscription: Subscription;
  @Input() searchString: boolean;

  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.visibleInvoices = this.filterVisibleList(changes.searchString.currentValue);
  }

  ngOnInit() {
    this.todosSubscription = this.invoiceService.invoices$
      .combineLatest()
      .subscribe(([invoices]) => {
        this.invoiceList = invoices;
        this.visibleInvoices = this.filterVisibleList(this.searchString);
      });
  }

  ngOnDestroy() {
    this.todosSubscription.unsubscribe();
  }

  filterVisibleList(serachString) {
    return this.invoiceList.filter(item => item.title.includes(serachString));
  }

}
