import { Order } from "./Order";
import { Product } from "./Product";
import { State } from "./State";

export class OrderShipped extends State {
  constructor(order: Order) {
    super(order);
  }

  public addProduct(_product: Product): void {
    console.log("Order is shipped, you can't add product");
  }

  public removeProduct(_product: Product): void {
    console.log("Order is shipped, you can't remove product");
  }

  public erase(): void {
    console.log("Order is shipped, you can't erase");
  }

  public nextState(): State {
    console.log("No change");
    return this;
  }
}
