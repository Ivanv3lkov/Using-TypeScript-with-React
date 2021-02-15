import { IOrder } from './calculate-total-amount';

export class ShoppingCart implements IOrder {
  calculateTotal() {
    return 100;
  }
}
