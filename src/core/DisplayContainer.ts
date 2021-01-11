import IDisplayContainer from '../interfaces/core/IDisplayContainer';
import IDisplayElement from '../interfaces/core/IDisplayElement';
import DisplayElement from './DisplayElement';

export default class DisplayContainer extends DisplayElement implements IDisplayContainer {
    public constructor() {
        super();
        this.name = 'DisplayContainer';
        this.addEventListener('internalSizeChanged', this.childInternalsChanged);
        this.addEventListener('internalWidthChanged', this.childInternalsChanged);
        this.addEventListener('internalHeightChanged', this.childInternalsChanged);
    }

    protected childInternalsChanged(e: Event): void {
        if (e.target === this) {
            return;
        }
        console.log(this.name, 'childInternalSizeChanged()');
        e.stopImmediatePropagation();
        this.invalidateInternalSize();
    }

    private elements: IDisplayElement[] = [];

    public addElement(element: IDisplayElement): void {
        console.log(this.name, 'addElement', element.name);
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
        }
        width = this.paddingLeft + width + this.paddingRight;
        height = this.paddingTop + height + this.paddingBottom;
        this.internalSize(width, height);
    }

    protected updateInternalWidth(): void {
        super.updateInternalWidth();
        let width = 0;
        for (const element of this.elements) {
            if (width < element.measuredWidth) {
                width = element.measuredWidth;
            }
        }
        width = this.paddingLeft + width + this.paddingRight;
        this.internalWidth = width;
    }

    protected updateInternalHeight(): void {
        super.updateInternalHeight();
        let height = 0;
        for (const element of this.elements) {
            if (height < element.measuredHeight) {
                height = element.measuredHeight;
            }
        }
        height = this.paddingTop + height + this.paddingBottom;
        this.internalHeight = height;
    }

    protected sizeChanged(): void {
        super.sizeChanged();
        this.updateLayout(this.measuredWidth, this.measuredHeight);
    }

    protected widthChanged(): void {
        super.widthChanged();
        this.updateLayout(this.measuredWidth, this.measuredHeight);
    }

    protected heightChanged(): void {
        this.heightChanged();
        this.updateLayout(this.measuredWidth, this.measuredHeight);
    }

    protected internalSizeChanged(): void {
        super.internalSizeChanged();
        this.updateLayout(this.measuredWidth, this.measuredHeight);
    }

    protected internalWidthChanged(): void {
        super.internalWidthChanged();
        this.updateLayout(this.measuredWidth, this.measuredHeight);
    }

    protected internalHeightChanged(): void {
        super.internalHeightChanged();
        this.updateLayout(this.measuredWidth, this.measuredHeight);
    }

    protected updateLayout(width: number, height: number): void {
        console.log(this.name, 'updateLayout(' + width + ', ' + height + ')');
        for (const element of this.elements) {
            element.x = this.paddingLeft;
            element.y = this.paddingTop;
        }
    }

    private _padding = 0;

    public set padding(value: number) {
        console.log(this.name, 'set padding', value);
        if (isNaN(value) || value < 0) {
            this._padding = 0;
            this._paddingLeft = 0;
            this._paddingTop = 0;
            this._paddingRight = 0;
            this._paddingBottom = 0;
            this.invalidateInternalSize();
            return;
        }
        this._padding = value;
        this._paddingTop = value;
        this._paddingRight = value;
        this._paddingBottom = value;
        this._paddingLeft = value;
        this.invalidateInternalSize();
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
                this.invalidateInternalSize();
            }
            return;
        }
        this._paddingTop = value;
        this.invalidateInternalSize();
    }

    public get paddingTop(): number {
        return this._paddingTop;
    }

    private _paddingRight = 0;

    public set paddingRight(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._paddingRight !== 0) {
                this._paddingRight = 0;
                this.invalidateInternalSize();
            }
            return;
        }
        this._paddingRight = value;
        this.invalidateInternalSize();
    }

    public get paddingRight(): number {
        return this._paddingRight;
    }

    private _paddingBottom = 0;

    public set paddingBottom(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._paddingBottom !== 0) {
                this._paddingBottom = 0;
                this.invalidateInternalSize();
            }
            return;
        }
        this._paddingBottom = value;
        this.invalidateInternalSize();
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
                this.invalidateInternalSize();
            }
            return;
        }
        this._paddingLeft = value;
        this.invalidateInternalSize();
    }

    public get paddingLeft(): number {
        return this._paddingLeft;
    }
}
customElements.define('display-container', DisplayContainer);
