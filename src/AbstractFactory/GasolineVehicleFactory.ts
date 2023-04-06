import { VehicleFactory } from "./VehicleFactory";
import { Car, CarInfos } from "./Car";
import { GasolineCar } from "./GasolineCar";
import { Scooter, ScooterInfos } from "./Scooter";
import { GasolineScooter } from "./GasolineScooter";

export class GasolineVehicleFactory implements VehicleFactory {
  createCar(infos: Omit<CarInfos, "motor">): Car {
    return new GasolineCar(infos);
  }
  createScooter(infos: Omit<ScooterInfos, "motor">): Scooter {
    return new GasolineScooter(infos);
  }
}
