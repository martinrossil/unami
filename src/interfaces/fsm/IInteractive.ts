import IEventDispatcher from '../event/IEventDispatcher';
import IPoint from '../vo/IPoint';

export default interface IInteractive extends IEventDispatcher {
    initial(e: Event): void;
    hover(e: Event): void;
    pressed(point: IPoint): void;
    triggered(): void;
    getBoundingClientRect(): DOMRect;
}
