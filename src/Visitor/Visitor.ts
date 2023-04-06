import { ParentCompany } from "./ParentCompany";
import { CompanyWithoutSubsidiary } from "./CompanyWithoutSubsidiary";

export interface Visitor {
  visit(company: ParentCompany): void;
  visit(company: CompanyWithoutSubsidiary): void;
}
