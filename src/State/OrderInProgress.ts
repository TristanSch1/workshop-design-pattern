import { Order } from "./Order";
import { Product } from "./Product";
import { State } from "./State";
import { OrderValidated } from "./OrderValidated";

export class OrderInProgress extends State {
  constructor(order: Order) {
    super(order);
  }

  public addProduct(product: Product): void {
    this.order.products.push(product);
    console.log("Order: addProduct");
    this.order.display();
  }

  public removeProduct(product: Product): void {
    this.order.products = this.order.products.filter((p) => p !== product);
    console.log("Order: removeProduct");
    this.order.display();
  }

  public erase(): void {
    this.order.erase();
  }

  public nextState(): State {
    if (!this.order.valid()) {
      return this;
    }
    console.log("Order: Switch state to OrderValidated");
    return new OrderValidated(this.order);
  }
}
