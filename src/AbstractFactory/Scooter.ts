import { Vehicle, VEHICLE_TYPES, VehicleInfos } from "../Observer/Vehicle";

export interface ScooterInfos extends Omit<VehicleInfos, "type"> {}
export class Scooter extends Vehicle {
  constructor(infos: ScooterInfos) {
    super({ ...infos, type: VEHICLE_TYPES.SCOOTER });
  }
}
