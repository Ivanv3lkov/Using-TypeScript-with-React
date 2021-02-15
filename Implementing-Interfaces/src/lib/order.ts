import { IOrder } from './calculate-total-amount';

export class Order implements IOrder {
  calculateTotal() {
    return 100;
  }
}
