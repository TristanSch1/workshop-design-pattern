import { Visitor } from "./Visitor";

export class Company {
  protected name: string;
  protected email: string;
  protected address: string;
  constructor(name: string, email: string, address: string) {
    this.name = name;
    this.email = email;
    this.address = address;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getAddress(): string {
    return this.address;
  }

  maintenanceCostCalculation(): void {}

  accept(visitor: Visitor): void {
    visitor.visit(this);
  }

  addSubsidiary(_subsidiary: Company): void {
    throw new Error("Method not implemented.");
  }

  protected setName(name: string): void {
    this.name = name;
  }

  protected setEmail(email: string): void {
    this.email = email;
  }

  protected setAddress(address: string): void {
    this.address = address;
  }
}
