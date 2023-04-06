import { Scooter, ScooterInfos } from "./Scooter";
import { VEHICLE_MOTOR_TYPES } from "../Observer/Vehicle";

export class ElectricScooter extends Scooter {
  constructor(infos: Omit<ScooterInfos, "motor">) {
    super({ ...infos, motor: VEHICLE_MOTOR_TYPES.ELECTRIC });
  }
}
