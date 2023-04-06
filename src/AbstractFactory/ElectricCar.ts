import { Car, CarInfos } from "./Car";
import { VEHICLE_MOTOR_TYPES } from "../Observer/Vehicle";

export class ElectricCar extends Car {
  constructor(infos: Omit<CarInfos, "motor" | "type">) {
    super({ ...infos, motor: VEHICLE_MOTOR_TYPES.ELECTRIC });
  }
}
