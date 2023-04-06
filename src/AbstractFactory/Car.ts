import { Vehicle, VEHICLE_TYPES, VehicleInfos } from "../Observer/Vehicle";

export enum Seats {
  leather = "leather",
  sport = "sport",
}

export enum Doors {
  three = "3",
  five = "5",
}

export interface CarInfos extends Omit<VehicleInfos, "type"> {
  seats?: Seats;
  doors?: Doors;
}
export class Car extends Vehicle {
  private seats: Seats | undefined;
  private doors: Doors | undefined;
  constructor(infos: CarInfos) {
    super({ ...infos, type: VEHICLE_TYPES.CAR });
    this.seats = infos.seats;
    this.doors = infos.doors;
  }

  getSeats(): Seats | undefined {
    return this.seats;
  }

  setSeats(seats: Seats): void {
    this.seats = seats;
    this.notify();
  }

  getDoors(): Doors | undefined {
    return this.doors;
  }

  setDoors(doors: Doors): void {
    this.doors = doors;
    this.notify();
  }
}
