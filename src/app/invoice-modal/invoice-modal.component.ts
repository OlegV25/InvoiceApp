import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-invoice-modal',
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.css']
})

export class InvoiceModalComponent implements OnInit {

  @Input() isOpen : boolean;
  @Output() onCloseEvent = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  name = '';

  ngOnInit() {}

}
