import { GraphicVehicleComponent } from "./GraphicVehicleComponent";
import { Decorator } from "./Decorator";

export class BrandDecorator extends Decorator {

    constructor(component: GraphicVehicleComponent) {
        super(component);
    }

    displayLogo(): void {
        console.log("BrandDecorator: displayLogo");
    }

    display(): void {
        this.component.display();
        this.displayLogo();
    }
}
