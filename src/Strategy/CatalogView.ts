interface CatalogDraw {
    draw(): void;
}

export class CatalogView {
    private catalogDraw: CatalogDraw;

    constructor(catalogDraw: CatalogDraw) {
        this.catalogDraw = catalogDraw;
    }

    draw(): void {
        this.catalogDraw.draw();
    }
}

export class DrawOneVehiclePerLine implements CatalogDraw {
    draw(): void {
        console.log("DrawOneVehiclePerLine: draw");
    }
}

export class drawThreeVehiclesPerLine implements CatalogDraw {
    draw(): void {
        console.log("drawThreeVehiclesPerLine: draw");
    }
}
