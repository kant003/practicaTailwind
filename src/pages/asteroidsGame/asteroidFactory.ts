import { Asteroid } from "./asteroid";
import { HEIGHT, WIDTH } from "./game";

interface AsteroidFactory {
    create(): Asteroid
}
export class EdgeAsteroidFactory implements AsteroidFactory {
    create(): Asteroid {
        const MAX_SIZE = 40
        const MIN_SIZE = 20
        const pos = Math.floor(Math.random() * 4)
        const size = Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE
        let x = 0
        let y = 0
        switch (pos) {
            case 0:
                x = Math.random() * WIDTH
                //  y = 0
                break
            case 1:
                x = WIDTH
                y = Math.random() * HEIGHT
                break
            case 2:
                x = Math.random() * WIDTH
                y = HEIGHT
                break
            case 3:
                //  x = 0
                y = Math.random() * HEIGHT
                break
        }
        return new Asteroid(x, y, size)
    }

}

/* class CenterAsteroidFactory implements AsteroidFactory {
    create(): Asteroid {
        throw new Error("Method not implemented.");
    }

} */