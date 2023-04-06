import { Order } from "./Order";
import { Product } from "./Product";

export abstract class State {
    protected order: Order;

    protected constructor(order: Order) {
        this.order = order;
    }

    public abstract addProduct(product: Product): void;

    public abstract removeProduct(product: Product): void;

    public abstract erase(): void;

    public abstract nextState(): State;

}
