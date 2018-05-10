import { Component, OnInit, Input} from '@angular/core';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoice-row, [app-invoice-row-id]',
  templateUrl: './invoice-row.component.html',
  styleUrls: ['./invoice-row.component.css']
})
export class InvoiceRowComponent implements OnInit {

  @Input() invoiceData: any;
  @Input() index: number;

  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnInit() { }

  remove(): void {
    this.invoiceService.remove(this.invoiceData.id);
  }

  dublicate(): void {
    this.invoiceService.dublicateInvoice(this.invoiceData.title, this.index);
  }

}
