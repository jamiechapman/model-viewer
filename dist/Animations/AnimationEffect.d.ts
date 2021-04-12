import { ITimestamp } from '../Schema/Animation';
import { Animation } from './Animation';
export declare abstract class AnimationEffect<T> {
    protected animation: Animation;
    abstract tick(): void;
    protected currentEffectIndex: number;
    protected effects: [number, T][];
    protected tickingEffects: {
        tick: () => void;
    }[];
    constructor(animation: Animation, timestampObj: ITimestamp<T>);
    getCurrentEffect(): T | undefined;
    reset(): void;
}
