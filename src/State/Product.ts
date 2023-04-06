export interface IProduct {
  name: string;
  price: number;
}

export class Product {
  name: string;
  price: number;
  constructor(product: IProduct) {
    this.name = product.name;
    this.price = product.price;
  }

  display(): void {
    console.log(`${this.name}, ${this.price}€`);
  }
}
