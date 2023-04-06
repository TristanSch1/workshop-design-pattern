import { Vehicle } from "../Observer/Vehicle";

export class Catalog {
  private vehicles: Vehicle[] = [];

  constructor() {}
  findVehicles(priceMin: number, priceMax: number) {}

  addVehicle(vehicle: Vehicle) {
    this.vehicles.push(vehicle);
  }

  getVehicles() {
    return this.vehicles;
  }
}
