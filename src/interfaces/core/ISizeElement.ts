import IBaseElement from './IBaseElement';

export default interface ISizeElement extends IBaseElement {
    size(width: number, height: number): void;
    minWidth: number;
    width: number;
    maxWidth: number;
    minHeight: number;
    height: number;
    maxHeight: number;
    percentWidth: number;
    percentHeight: number;
    readonly measuredWidth: number;
    readonly measuredHeight: number;
}
