import { AnimateTimelineEvent, CallTimelineEvent } from "../types/events/timelineEvents";
import { AnimateCallbacks } from "../types/events/animateEvent";

export function at(time: number) {
    return {
        animate: (
            targetId: string,
            targetProps: Record<string, any>,
            animateProps: Record<string, any>,
            callbacks?: AnimateCallbacks,
        ): AnimateTimelineEvent => ({
            type: 'animate',
            time,
            targetId,
            targetProps,
            animateProps,
            callbacks
        }),
        call: (fn: () => void): CallTimelineEvent => ({
            type: 'call',
            time,
            fn
        })
    }
};
