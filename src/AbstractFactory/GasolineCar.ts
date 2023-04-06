import { Car, CarInfos } from "./Car";
import { VEHICLE_MOTOR_TYPES } from "../Observer/Vehicle";

export class GasolineCar extends Car {
  constructor(infos: Omit<CarInfos, "motor">) {
    super({ ...infos, motor: VEHICLE_MOTOR_TYPES.GASOLINE });
  }
}
