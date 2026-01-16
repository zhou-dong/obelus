import { Animatable } from '../objects/animatable';
import { StepEvent } from '../events/stepEvents';

export type StepScene<T> = {
    objects: Animatable<T>[];
    steps: StepEvent[];
};
