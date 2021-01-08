import IDisplayElement from './IDisplayElement';

export default interface IDisplayContainer extends IDisplayElement {
    addElement(element: IDisplayElement): void;
    addElements(elements: Array<IDisplayElement>): void;
}
