import { Order } from "../State/Order";

export class CreditOrder extends Order {
  constructor() {
    super();
  }
  valid(): boolean {
    console.log("CreditOrder: valid");
    return true;
  }

  pay(): void {
    console.log("CreditOrder: pay");
  }
}
