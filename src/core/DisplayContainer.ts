import IDisplayContainer from '../interfaces/core/IDisplayContainer';
import IPositionElement from '../interfaces/core/IPositionElement';
import ISizeElement from '../interfaces/core/ISizeElement';
import ILayout from '../interfaces/layout/ILayout';
import ISize from '../interfaces/vo/ISize';
import AbsoluteLayout from '../layout/AbsoluteLayout';
import DisplayElement from './DisplayElement';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    public constructor() {
        super();
        this.name = 'DisplayContainer';
        this.addEventListener('invalidate', this.childInvalid);
    }

    protected validate(): void {
        super.validate();
        this.invalidateInternalSize();
        this.updateChildrenSizes();
        this.updateLayout();
    }

    protected updateChildrenSizes(): void {
        this.layout.updateChildrenSizes(this, this.elements);
    }

    protected updateLayout(): void {
        this.layout.updateLayout(this, this.elements);
    }

    protected childInvalid(e: Event): void {
        if (e.target === this) {
            return;
        }
        e.stopImmediatePropagation();
        this.invalidate();
    }

    private elements: Array<ISizeElement & IPositionElement> = [];

    public addElement(element: ISizeElement): void {
        this.elements.push(element as ISizeElement & IPositionElement);
        this.appendChild(element as unknown as Node);
        this.invalidate();
    }

    public addElements(elements: Array<ISizeElement>): void {
        const frag: DocumentFragment = document.createDocumentFragment();
        for (const element of elements) {
            this.elements.push(element as ISizeElement & IPositionElement);
            frag.appendChild(element as unknown as Node);
        }
        this.appendChild(frag);
        this.invalidate();
    }

    protected updateInternalSize(): void {
        // super.updateInternalSize();
        const size: ISize = this.layout.getInternalSize(this, this.elements);
        this.internalSize(size.width, size.height);
    }

    protected updateInternalWidth(): void {
        // super.updateInternalWidth();
        this.internalWidth = this.layout.getInternalWidth(this, this.elements);
    }

    protected updateInternalHeight(): void {
        // super.updateInternalHeight();
        this.internalHeight = this.layout.getInternalHeight(this, this.elements);
    }

    private _layout!: ILayout;

    public set layout(value: ILayout) {
        if (this._layout === value) {
            return;
        }
        if (this._layout) {
            this._layout.removeEventListener('invalidate', this.invalidate);
        }
        this._layout = value;
        this._layout.addEventListener('invalidate', this.invalidate);
        this.invalidate();
    }

    public get layout(): ILayout {
        if (!this._layout) {
            this._layout = new AbsoluteLayout();
            this._layout.addEventListener('invalidate', this.invalidate);
        }
        return this._layout;
    }

    private _padding = 0;

    public set padding(value: number) {
        if (isNaN(value) || value < 0) {
            this._padding = 0;
            this._paddingLeft = 0;
            this._paddingTop = 0;
            this._paddingRight = 0;
            this._paddingBottom = 0;
            this.invalidate();
            return;
        }
        this._padding = value;
        this._paddingTop = value;
        this._paddingRight = value;
        this._paddingBottom = value;
        this._paddingLeft = value;
        this.invalidate();
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
                this.invalidate();
            }
            return;
        }
        this._paddingTop = value;
        this.invalidate();
    }

    public get paddingTop(): number {
        return this._paddingTop;
    }

    private _paddingRight = 0;

    public set paddingRight(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._paddingRight !== 0) {
                this._paddingRight = 0;
                this.invalidate();
            }
            return;
        }
        this._paddingRight = value;
        this.invalidate();
    }

    public get paddingRight(): number {
        return this._paddingRight;
    }

    private _paddingBottom = 0;

    public set paddingBottom(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._paddingBottom !== 0) {
                this._paddingBottom = 0;
                this.invalidate();
            }
            return;
        }
        this._paddingBottom = value;
        this.invalidate();
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
                this.invalidate();
            }
            return;
        }
        this._paddingLeft = value;
        this.invalidate();
    }

    public get paddingLeft(): number {
        return this._paddingLeft;
    }
}
customElements.define('display-container', DisplayContainer);
