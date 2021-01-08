import IDisplayContainer from '../interfaces/core/IDisplayContainer';
import IDisplayElement from '../interfaces/core/IDisplayElement';
import DisplayElement from './DisplayElement';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    public constructor() {
        super();
        this.name = 'DisplayContainer';
    }

    private elements: IDisplayElement[] = [];

    public addElement(element: IDisplayElement): void {
        this.elements.push(element);
        this.appendChild(element as unknown as Node);
        // this.invalidateInternalSize();
    }
}
customElements.define('display-container', DisplayContainer);
