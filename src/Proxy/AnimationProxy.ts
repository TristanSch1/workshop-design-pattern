import { Animation } from "./Animation";
import { Film } from "./Film";

export class AnimationProxy implements Animation {
  film: Film | undefined;
  photo: string;

  constructor(film: Film, photo: string) {
    this.film = film;
    this.photo = photo;
  }

  click(): void {
    if (this.film) {
      this.film = new Film();
      this.film.load();
    }

    this.film?.play();
  }

  draw(photo?: string): void {
    if (this.film) {
      this.film.draw();
    } else {
      this.draw(photo);
    }
  }
}
