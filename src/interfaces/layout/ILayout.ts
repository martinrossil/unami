import IDisplayContainer from '../core/IDisplayContainer';
import IDisplayElement from '../core/IDisplayElement';
import IPositionElement from '../core/IPositionElement';
import IEventDispatcher from '../event/IEventDispatcher';
import ISize from '../vo/ISize';

export default interface ILayout extends IEventDispatcher {
    updateChildrenSizes(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): void;
    updateLayout(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): void;
    getInternalSize(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): ISize;
    getInternalWidth(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): number;
    getInternalHeight(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): number;
}
