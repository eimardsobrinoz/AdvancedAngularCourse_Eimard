import { AnimationsInterface } from './animations.interface';

export class AnimationModel implements AnimationsInterface {

    constructor(
        public path: string,
        public name: string,
        public summary: string,
        public url?: string) {

    }

}
