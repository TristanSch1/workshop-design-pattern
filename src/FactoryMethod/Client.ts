import { Order } from "../State/Order";

export abstract class Client {
  private order: Order | undefined;
  newCommand(): void {
    this.order = this.createCommand();
    if (this.order.valid()) {
      this.order.pay();
    }
  }

  protected createCommand(): Order {
    return new Order();
  }
}
