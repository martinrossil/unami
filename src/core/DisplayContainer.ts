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
        this.invalidateInternalSize();
    }

    public addElements(elements: Array<IDisplayElement>): void {
        const frag: DocumentFragment = document.createDocumentFragment();
        for (const element of elements) {
            this.elements.push(element);
            frag.appendChild(element as unknown as Node);
        }
        this.appendChild(frag);
        this.invalidateInternalSize();
    }

    protected updateInternalSize(): void {
        let width = 0;
        let height = 0;
        for (const element of this.elements) {
            if (width < element.measuredWidth) {
                width = element.measuredWidth;
            }
            if (height < element.measuredHeight) {
                height = element.measuredHeight;
            }
        }
        this.internalSize(width, height);
    }
}
customElements.define('display-container', DisplayContainer);
