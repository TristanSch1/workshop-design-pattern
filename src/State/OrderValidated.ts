import { State } from "./State";
import { Order } from "./Order";
import { Product } from "./Product";
import { OrderShipped } from "./OrderShipped";

export class OrderValidated extends State {
  constructor(order: Order) {
    super(order);
  }

  public addProduct(_product: Product): void {
    console.log("Order is validated, you can't add product");
  }

  public removeProduct(_product: Product): void {
    console.log("Order is validated, you can't remove product");
  }

  public erase() {
    this.order.erase();
  }

  public nextState(): State {
    console.log("Order: Switch state to OrderShipped");
    return new OrderShipped(this.order);
  }
}
