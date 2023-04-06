import { VehicleRecovery } from "./VehicleRecovery";
import { DocumentManagement } from "./DocumentManagement";
import { Catalog } from "./Catalog";

export class WebServiceAuto {
    protected vehicleRecovery: VehicleRecovery;
    protected documentManagement: DocumentManagement;
    protected catalog: Catalog;

    constructor() {
        this.vehicleRecovery = new VehicleRecovery();
        this.documentManagement = new DocumentManagement();
        this.catalog = new Catalog();
    }

    findVehicles(averagePrice: number, maxDeviation: number) {
        return this.catalog.findVehicles(averagePrice - maxDeviation, averagePrice + maxDeviation);
    }
}
