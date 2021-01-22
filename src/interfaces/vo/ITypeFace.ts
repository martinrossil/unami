import IEventDispatcher from '../event/IEventDispatcher';

export default interface ITypeFace extends IEventDispatcher {
    fontFamily: string;
    fontWeight: number;
    capHeight: number;
    offsetX: number;
    offsetY: number;
}
