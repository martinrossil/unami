import IPositionElement from './IPositionElement';

export default interface ISizeElement extends IPositionElement {
    size(width: number, height: number): void;
    minWidth: number;
    width: number;
    maxWidth: number;
    minHeight: number;
    height: number;
    maxHeight: number;
    percentWidth: number;
    percentHeight: number;
}
