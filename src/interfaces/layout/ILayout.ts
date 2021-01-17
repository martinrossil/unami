import IDisplayContainer from '../core/IDisplayContainer';
import IPositionElement from '../core/IPositionElement';
import ISizeElement from '../core/ISizeElement';
import IEventDispatcher from '../event/IEventDispatcher';
import ISize from '../vo/ISize';

export default interface ILayout extends IEventDispatcher {
    updateChildrenSizes(container: IDisplayContainer, elements: Array<ISizeElement & IPositionElement>): void;
    updateLayout(container: IDisplayContainer, elements: Array<ISizeElement & IPositionElement>): void;
    getInternalSize(container: IDisplayContainer, elements: Array<ISizeElement & IPositionElement>): ISize;
    getInternalWidth(container: IDisplayContainer, elements: Array<ISizeElement & IPositionElement>): number;
    getInternalHeight(container: IDisplayContainer, elements: Array<ISizeElement & IPositionElement>): number;
}
