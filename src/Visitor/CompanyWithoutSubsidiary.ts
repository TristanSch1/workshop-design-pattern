import { Company } from "./Company";
import { Visitor } from "./Visitor";

export class CompanyWithoutSubsidiary extends Company {
  constructor(name: string, email: string, address: string) {
    super(name, email, address);
  }

  accept(visitor: Visitor): void {
    visitor.visit(this);
  }

  maintenanceCostCalculation(): void {
    console.log("CompanyWithoutSubsidiary: maintenanceCostCalculation");
  }
}
