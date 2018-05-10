import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import { Invoice } from '../models/invoice.model';

const initialInvoice: Invoice[] = JSON.parse(localStorage.getItem('invoice-list')) || [];

type InviceOperation = (invoices: Invoice[]) => Invoice[];

@Injectable()
export class InvoiceService {

  isAddModalOpen = false;

  invoices$: Observable<Invoice[]>;

  update$: BehaviorSubject<InviceOperation> = new BehaviorSubject<InviceOperation>((invoice: Invoice[]) => invoice);

  createInvoice$: Subject<Invoice> = new Subject<Invoice>();

  dublicateInvoice$: Subject<any> = new Subject<any>();

  removeInvoice$: Subject<string> = new Subject<string>();

  create$: Subject<Invoice> = new Subject<Invoice>();

  dublicate$: Subject<any> = new Subject<any>();

  remove$: Subject<string> = new Subject<string>();

  immortalSubscriber: Subscription;

  constructor() {

    this.invoices$ = this.update$
        .scan((invoices: Invoice[], operation: InviceOperation) => operation(invoices), initialInvoice)
        .publishReplay(1)
        .refCount();

    this.invoices$.forEach(invoices => localStorage.setItem('invoice-list', JSON.stringify(invoices)));

    this.create$
        .map((invoice: Invoice): InviceOperation => {
          return (invoices: Invoice[]) => {
            return invoices.concat(invoice);
          };
        })
        .subscribe(this.update$);

    this.dublicate$
      .map(({invoice, index}) => {
        return (invoices: Invoice[]) => {
          invoices.splice(index, 0, invoice);
          return invoices;
        };
      })
      .subscribe(this.update$);

    this.remove$
        .map((uuid: string): InviceOperation => (invoices: Invoice[]) => invoices.filter(invoice => invoice.id !== uuid))
        .subscribe(this.update$);

    this.createInvoice$
        .subscribe(this.create$);

    this.removeInvoice$
        .subscribe(this.remove$);

    this.dublicateInvoice$
        .subscribe(this.dublicate$);

  }

  toggleAddModal(): void {
    this.isAddModalOpen = !this.isAddModalOpen;
  }

  addInvoice(title: string): void {
    this.createInvoice$.next(new Invoice(title));
  }

  dublicateInvoice(title: string, index: number): void {
    const invoice = new Invoice(title);
    this.dublicateInvoice$.next({invoice, index});
  }

  remove(uuid: string): void {
    this.removeInvoice$.next(uuid);
  }

}
