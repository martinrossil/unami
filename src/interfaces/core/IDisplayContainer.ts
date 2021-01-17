import ILayout from '../layout/ILayout';
import IDisplayElement from './IDisplayElement';
import ISizeElement from './ISizeElement';

export default interface IDisplayContainer extends IDisplayElement {
    addElement(element: ISizeElement): void;
    addElements(elements: Array<ISizeElement>): void;
    padding: number;
    paddingLeft: number;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    layout: ILayout;
}
