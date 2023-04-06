import { Animation } from "./Animation";

export class Film implements Animation {
    click(): void {
        console.log("Film: click");
    }

    load(): void {
        console.log("Film: load");
    }

    play(): void {
        console.log("Film: play");
    }

    draw(): void {
        console.log("Film: draw");
    }
}
