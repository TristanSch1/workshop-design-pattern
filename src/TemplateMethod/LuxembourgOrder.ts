import { Order } from "../State/Order";

export class LuxembourgOrder extends Order {
  constructor() {
    super();
  }

  protected get tvaAmount() {
    return parseFloat((this.beforeTaxAmount * 0.15).toFixed(2));
  }
}
