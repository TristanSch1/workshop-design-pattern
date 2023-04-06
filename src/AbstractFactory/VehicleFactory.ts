import { Car, CarInfos } from "./Car";
import { Scooter, ScooterInfos } from "./Scooter";

export interface VehicleFactory {
  createCar: (infos: Partial<CarInfos>) => Car;
  createScooter: (infos: Partial<ScooterInfos>) => Scooter;
}
