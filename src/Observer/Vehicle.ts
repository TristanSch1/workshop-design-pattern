import { Subject } from "./Subject";
import { Brand, BRANDS } from "../datas/brands";

export enum VEHICLE_MOTOR_TYPES {
  ELECTRIC = "ELECTRIC",
  GASOLINE = "GASOLINE",
}

export enum VEHICLE_TYPES {
  CAR = "CAR",
  SCOOTER = "SCOOTER",
}

export interface VehicleInfos {
  brand?: Brand;
  description?: string;
  price?: number;
  motor: VEHICLE_MOTOR_TYPES;
  type: VEHICLE_TYPES;
}
export class Vehicle extends Subject {
  protected description: string | undefined;
  protected price: number | undefined;
  protected brand: Brand | undefined;
  protected model: string | undefined;
  protected motor: VEHICLE_MOTOR_TYPES;
  protected type: VEHICLE_TYPES;
  private defaultDescription = "Default vehicle description";
  constructor(infos: VehicleInfos) {
    super();
    this.description = infos.description;
    this.price = infos.price;
    this.brand = infos.brand;
    this.motor = infos.motor;
    this.type = infos.type;
  }

  getDescription(): string {
    console.log("Search for description...");
    if (this.description) {
      console.log("Found specific description");
      return this.description;
    } else if (this.brand && BRANDS[this.brand].description) {
      console.log("No specific description but found brand description");
      return BRANDS[this.brand].description;
    } else if (
      this.brand &&
      this.model &&
      BRANDS[this.brand].models[
        this.model as keyof (typeof BRANDS)[Brand]["models"]
      ]["description"]
    ) {
      console.log(
        "No specific and brand description but found model description"
      );
      return BRANDS[this.brand].models[
        this.model as keyof (typeof BRANDS)[Brand]["models"]
      ]["description"];
    } else {
      console.log("Found no description, there is the default description");
      return this.defaultDescription;
    }
  }

  setDescription(description: string): void {
    this.description = description;
    this.notify("description update");
  }

  getPrice(): number | undefined {
    return this.price;
  }

  setPrice(price: number): void {
    this.price = price;
    this.notify("price update");
  }

  getBrand(): string | undefined {
    return this.brand;
  }

  setBrand(brand: Brand): void {
    this.brand = brand;
    this.notify("brand update");
  }

  getMotor(): VEHICLE_MOTOR_TYPES | undefined {
    return this.motor;
  }

  setMotor(motor: VEHICLE_MOTOR_TYPES): void {
    this.motor = motor;
    this.notify("motor update");
  }

  getType(): VEHICLE_TYPES | undefined {
    return this.type;
  }
}
