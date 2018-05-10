import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoice-modal',
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.css']
})

export class InvoiceModalComponent implements OnInit {

  @Input() isOpen: boolean;
  name = '';

  constructor(
    private todoService: InvoiceService
  ) { }

  ngOnInit() { }

  addInvoice(): void {
    this.todoService.addInvoice(this.name);
  }


}
