export type AnimateCallbacks = {
    onStart?: () => void;
    onComplete?: () => void;
};

export type AnimateEvent = {
    type: 'animate';
    targetId: string;
    targetProps: Record<string, any>;
    animateProps: Record<string, any>;
    callbacks?: AnimateCallbacks;
};
