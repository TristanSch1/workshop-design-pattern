import { Company } from "./Company";
import { Visitor } from "./Visitor";

export class ParentCompany extends Company {
  private subsidiaries: Company[] = [];
  constructor(name: string, email: string, address: string) {
    super(name, email, address);
  }

  addSubsidiary(subsidiary: Company): void {
    this.subsidiaries.push(subsidiary);
  }
  accept(visitor: Visitor): void {
    visitor.visit(this);
    this.subsidiaries.forEach((subsidiary) => {
      subsidiary.accept(visitor);
    });
  }

  maintenanceCostCalculation(): void {
    this.subsidiaries.forEach((subsidiary) => {
      subsidiary.maintenanceCostCalculation();
    });
  }
}
