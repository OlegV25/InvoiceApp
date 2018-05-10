import * as uuid from 'node-uuid';

export class Invoice {
  id: string;
  title: string;

  constructor(title: string) {
    this.id = uuid.v4();
    this.title = title;
  }
}
