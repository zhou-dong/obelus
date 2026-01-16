import { Animatable } from "../objects/animatable";
import { TimelineEvent } from "../events/timelineEvents";

export type TimelineScene<T> = {
    objects: Animatable<T>[];
    timeline: TimelineEvent[];
};
