import { CreditOrder } from "./CreditOrder";
import { Client } from "./Client";
import { Order } from "../State/Order";

export class CreditClient extends Client {
  constructor() {
    super();
  }
  protected createCommand(): Order {
    return new CreditOrder();
  }
}
