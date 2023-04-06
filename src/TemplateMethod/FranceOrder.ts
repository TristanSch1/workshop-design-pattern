import { Order } from "../State/Order";

export class FranceOrder extends Order {
  constructor() {
    super();
  }

  protected get tvaAmount() {
    return parseFloat((this.beforeTaxAmount * 0.196).toFixed(2));
  }
}
