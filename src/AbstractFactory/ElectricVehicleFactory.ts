import { Car, CarInfos } from "./Car";
import { VehicleFactory } from "./VehicleFactory";
import { Scooter, ScooterInfos } from "./Scooter";
import { ElectricCar } from "./ElectricCar";
import { ElectricScooter } from "./ElectricScooter";

export class ElectricVehicleFactory implements VehicleFactory {
  createCar(infos: Omit<CarInfos, "motor">): Car {
    return new ElectricCar(infos);
  }
  createScooter(infos: Omit<ScooterInfos, "motor">): Scooter {
    return new ElectricScooter(infos);
  }
}
