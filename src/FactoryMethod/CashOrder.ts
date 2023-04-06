import { Order } from "../State/Order";

export class CashOrder extends Order {
  constructor() {
    super();
  }

  valid(): boolean {
    console.log("CashOrder: valid");
    return true;
  }

  pay(): void {
    console.log("CashOrder: pay");
  }
}
