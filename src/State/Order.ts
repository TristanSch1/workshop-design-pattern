import { State } from "./State";
import { OrderInProgress } from "./OrderInProgress";
import { Product } from "./Product";

export abstract class Order {
  products: Product[] = [];
  state: State;

  protected constructor() {
    this.state = new OrderInProgress(this);
  }

  protected get beforeTaxAmount(): number {
    return this.products.reduce((total, p) => total + p.price, 0);
  }

  protected get afterTaxAmount(): number {
    return this.beforeTaxAmount + this.tvaAmount;
  }

  protected get tvaAmount(): number {
    return 0;
  }

  getProducts(): Product[] {
    return this.products;
  }

  public addProduct(product: Product) {
    this.state.addProduct(product);
  }

  public removeProduct(product: Product) {
    this.state.removeProduct(product);
  }

  public erase() {
    this.products = [];
    console.log("Order: erase");
    this.display();
  }

  public nextState() {
    console.log("Order: nextState");
    this.state = this.state.nextState();
  }

  public pay() {
    console.log("Order: pay");
  }

  public valid(): boolean {
    if (this.products.length === 0) {
      console.log("Order is empty, you can't validate it");
      return false;
    } else {
      console.log("Order is valid");
      return true;
    }
  }

  public display() {
    console.log("Products in order:");
    this.products.forEach((p) => p.display());
    console.log("------------------");
    console.log(`Total before tax amount: ${this.beforeTaxAmount}`);
    console.log(`Total after tax amount: ${this.afterTaxAmount}`);
    console.log(`Total TVA amount: ${this.tvaAmount}`);
  }
}
