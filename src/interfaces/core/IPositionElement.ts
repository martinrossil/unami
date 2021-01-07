import IBaseElement from './IBaseElement';

export default interface IPositionElement extends IBaseElement {
    move(x: number, y: number): void;
    x: number;
    y: number;
}
