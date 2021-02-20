import ILinkContainer from '../interfaces/core/ILinkContainer';
import IPositionElement from '../interfaces/core/IPositionElement';
import ISizeElement from '../interfaces/core/ISizeElement';
import DisplayContainer from './DisplayContainer';

export default class LinkContainer extends DisplayContainer implements ILinkContainer {
    public constructor() {
        super();
        this.name = 'LinkContainer';
        this.appendChild(this.anchorElement);
    }

    public addElement(element: ISizeElement): void {
        this.elements.push(element as ISizeElement & IPositionElement);
        this.anchorElement.appendChild(element as unknown as Node);
        this.invalidate();
    }

    public addElements(elements: Array<ISizeElement>): void {
        const frag: DocumentFragment = document.createDocumentFragment();
        for (const element of elements) {
            this.elements.push(element as ISizeElement & IPositionElement);
            frag.appendChild(element as unknown as Node);
        }
        this.anchorElement.appendChild(frag);
        this.invalidate();
    }

    public removeElement(element: ISizeElement): void {
        const start: number = this.elements.indexOf(element as ISizeElement & IPositionElement);
        this.elements.splice(start, 1);
        this.anchorElement.removeChild(element as unknown as Node);
        this.invalidate();
    }

    public removeElements(): void {
        if (this.elements.length > 0) {
            while (this.elements.length > 0) {
                const element: ISizeElement & IPositionElement = this.elements.splice(0, 1)[0];
                this.anchorElement.removeChild(element as unknown as Node);
            }
            this.invalidate();
        }
    }

    private _href = '';

    public set href(value: string) {
        if (this._href === value) {
            return;
        }
        this._href = value;
        if (this._href) {
            this.anchorElement.href = this._href;
            return;
        }
        this.anchorElement.href = '';
    }

    public get href(): string {
        return this._href;
    }

    private _anchorElement!: HTMLAnchorElement;

    private get anchorElement(): HTMLAnchorElement {
        if (!this._anchorElement) {
            this._anchorElement = document.createElement('a');
        }
        return this._anchorElement;
    }
}
customElements.define('link-container', LinkContainer);
