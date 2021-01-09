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
        super.updateInternalSize();
        let width = 0;
        let height = 0;
        for (const element of this.elements) {
            if (width < element.measuredWidth) {
                width = element.measuredWidth;
            }
            if (height < element.measuredHeight) {
                height = element.measuredHeight;
            }
            element.x = this.paddingLeft;
            element.y = this.paddingTop;
        }
        width = this.paddingLeft + width + this.paddingRight;
        height = this.paddingTop + height + this.paddingBottom;
        this.internalSize(width, height);
    }

    private _padding = 0;

    public set padding(value: number) {
        if (isNaN(value) || value < 0) {
            this._padding = 0;
            this._paddingLeft = 0;
            this._paddingTop = 0;
            this._paddingRight = 0;
            this._paddingBottom = 0;
            // this.notify();
            return;
        }
        this._padding = value;
        this._paddingTop = value;
        this._paddingRight = value;
        this._paddingBottom = value;
        this._paddingLeft = value;
        // this.notify();
    }

    public get padding(): number {
        return this._padding;
    }

    private _paddingTop = 0;

    public set paddingTop(value: number) {
        if (this._paddingTop === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._paddingTop !== 0) {
                this._paddingTop = 0;
                // this.notify();
            }
            return;
        }
        this._paddingTop = value;
        // this.notify();
    }

    public get paddingTop(): number {
        return this._paddingTop;
    }

    private _paddingRight = 0;

    public set paddingRight(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._paddingRight !== 0) {
                this._paddingRight = 0;
                // this.notify();
            }
            return;
        }
        this._paddingRight = value;
        // this.notify();
    }

    public get paddingRight(): number {
        return this._paddingRight;
    }

    private _paddingBottom = 0;

    public set paddingBottom(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._paddingBottom !== 0) {
                this._paddingBottom = 0;
                // this.notify();
            }
            return;
        }
        this._paddingBottom = value;
        // this.notify();
    }

    public get paddingBottom(): number {
        return this._paddingBottom;
    }

    private _paddingLeft = 0;

    public set paddingLeft(value: number) {
        if (this._paddingLeft === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._paddingLeft !== 0) {
                this._paddingLeft = 0;
                // this.notify();
            }
            return;
        }
        this._paddingLeft = value;
        // this.notify();
    }

    public get paddingLeft(): number {
        return this._paddingLeft;
    }
}
customElements.define('display-container', DisplayContainer);
