import { CashOrder } from "./CashOrder";
import { Client } from "./Client";
import { Order } from "../State/Order";

export class CashClient extends Client {
  constructor() {
    super();
  }
  protected createCommand(): Order {
    return new CashOrder();
  }
}
