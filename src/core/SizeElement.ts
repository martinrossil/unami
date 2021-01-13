import ISizeElement from '../interfaces/core/ISizeElement';
import PositionElement from './PositionElement';

export default class SizeElement extends PositionElement implements ISizeElement {
    public constructor() {
        super();
        this.name = 'SizeElement';
    }

    public size(width: number, height: number): void {
        let widthChanged = false;
        if (isNaN(this._width) && !isNaN(width)) {
            if (width < this.minWidth) {
                this._width = this.minWidth;
            } else if (width > this.maxWidth) {
                this._width = this.maxWidth;
            } else {
                this._width = width;
            }
            this.actualWidth = this._width;
            widthChanged = true;
        } else if (!isNaN(this._width) && isNaN(width)) {
            this._width = NaN;
            widthChanged = true;
        } else if (this._width !== width) {
            if (width < this.minWidth) {
                this._width = this.minWidth;
            } else if (width > this.maxWidth) {
                this._width = this.maxWidth;
            } else {
                this._width = width;
            }
            this.actualWidth = this._width;
            widthChanged = true;
        }
        let heightChanged = false;
        if (isNaN(this._height) && !isNaN(height)) {
            if (height < this.minHeight) {
                this._height = this.minHeight;
            } else if (height > this.maxHeight) {
                this._height = this.maxHeight;
            } else {
                this._height = height;
            }
            this.actualHeight = this._height;
            heightChanged = true;
        } else if (!isNaN(this._height) && isNaN(height)) {
            this._height = NaN;
            heightChanged = true;
        } else if (this._height !== height) {
            if (height < this.minHeight) {
                this._height = this.minHeight;
            } else if (height > this.maxHeight) {
                this._height = this.maxHeight;
            } else {
                this._height = height;
            }
            this.actualHeight = this._height;
            heightChanged = true;
        }
        if (widthChanged || heightChanged) {
            this.invalidate();
        }
    }

    private _minWidth = 0;

    public set minWidth(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._minWidth !== 0) {
                this._minWidth = value;
            }
            return;
        }
        if (value > this.maxWidth) {
            if (this._minWidth !== this.maxWidth) {
                this._minWidth = this.maxWidth;
            }
            if (this.width < this._minWidth) {
                this.width = this._minWidth;
            }
            return;
        }
        if (this._minWidth === value) {
            return;
        }
        this._minWidth = value;
        if (this.width < this._minWidth) {
            this.width = this._minWidth;
        }
    }

    public get minWidth(): number {
        return this._minWidth;
    }

    private _width = NaN;

    public set width(value: number) {
        if (isNaN(this._width) && isNaN(value)) {
            return;
        }
        if (this._width === value) {
            return;
        }
        if (isNaN(value)) {
            this._width = value;
            this.invalidate();
            return;
        }
        if (value < this.minWidth) {
            if (this._width !== this.minWidth) {
                this._width = this.minWidth;
                this.actualWidth = this._width;
                this.invalidate();
            }
            return;
        }
        if (value > this.maxWidth) {
            if (this._width !== this.maxWidth) {
                this._width = this.maxWidth;
                this.actualWidth = this._width;
                this.invalidate();
            }
            return;
        }
        this._width = value;
        this.actualWidth = this._width;
        this.invalidate();
    }

    public get width(): number {
        return this._width;
    }

    private _maxWidth = Infinity;

    public set maxWidth(value: number) {
        if (isNaN(value)) {
            if (this._maxWidth !== Infinity) {
                this._maxWidth = Infinity;
            }
            return;
        }
        if (this._maxWidth === value) {
            return;
        }
        if (value < this.minWidth) {
            if (this._maxWidth !== this.minWidth) {
                this._maxWidth = this.minWidth;
            }
            if (this.width > this._maxWidth) {
                this.width = this._maxWidth;
            }
            return;
        }
        this._maxWidth = value;
        if (this.width > this._maxWidth) {
            this.width = this._maxWidth;
        }
    }

    public get maxWidth(): number {
        return this._maxWidth;
    }

    private _minHeight = 0;

    public set minHeight(value: number) {
        if (isNaN(value) || value < 0) {
            if (this._minHeight !== 0) {
                this._minHeight = value;
            }
            return;
        }
        if (this._minHeight === value) {
            return;
        }
        if (value > this.maxHeight) {
            if (this._minHeight !== this.maxHeight) {
                this._minHeight = this.maxHeight;
            }
            if (this.height < this._minHeight) {
                this.height = this._minHeight;
            }
            return;
        }
        this._minHeight = value;
        if (this.height < this._minHeight) {
            this.height = this._minHeight;
        }
    }

    public get minHeight(): number {
        return this._minHeight;
    }

    private _height = NaN;

    public set height(value: number) {
        if (isNaN(this._height) && isNaN(value)) {
            return;
        }
        if (this._height === value) {
            return;
        }
        if (isNaN(value)) {
            this._height = value;
            this.invalidate();
            return;
        }
        if (value < this.minHeight) {
            if (this._height !== this.minHeight) {
                this._height = this.minHeight;
                this.actualHeight = this._height;
                this.invalidate();
            }
            return;
        }
        if (value > this.maxHeight) {
            if (this._height !== this.maxHeight) {
                this._height = this.maxHeight;
                this.actualHeight = this._height;
                this.invalidate();
            }
            return;
        }
        this._height = value;
        this.actualHeight = this._height;
        this.invalidate();
    }

    public get height(): number {
        return this._height;
    }

    private _maxHeight = Infinity;

    public set maxHeight(value: number) {
        if (isNaN(value)) {
            if (this._maxHeight !== Infinity) {
                this._maxHeight = Infinity;
            }
            return;
        }
        if (this._maxHeight === value) {
            return;
        }
        if (value < this.minHeight) {
            if (this._maxHeight !== this.minHeight) {
                this._maxHeight = this.minHeight;
            }
            if (this.height > this._maxHeight) {
                this.height = this._maxHeight;
            }
            return;
        }
        this._maxHeight = value;
        if (this.height > this._maxHeight) {
            this.height = this._maxHeight;
        }
    }

    public get maxHeight(): number {
        return this._maxHeight;
    }

    private _percentWidth = NaN;

    public set percentWidth(value: number) {
        if (isNaN(this._percentWidth) && isNaN(value)) {
            return;
        }
        if (this._percentWidth === value) {
            return;
        }
        if (isNaN(value)) {
            this._percentWidth = NaN;
            this.notify();
            return;
        }
        if (value < 0) {
            if (this._percentWidth !== 0) {
                this._percentWidth = 0;
                this.notify();
            }
            return;
        }
        if (value > 100) {
            if (this._percentWidth !== 100) {
                this._percentWidth = 100;
                this.notify();
            }
            return;
        }
        this._percentWidth = value;
        this.notify();
    }

    public get percentWidth(): number {
        return this._percentWidth;
    }

    private _percentHeight = NaN;

    public set percentHeight(value: number) {
        if (isNaN(this._percentHeight) && isNaN(value)) {
            return;
        }
        if (this._percentHeight === value) {
            return;
        }
        if (isNaN(value)) {
            this._percentHeight = NaN;
            this.notify();
            return;
        }
        if (value < 0) {
            if (this._percentHeight !== 0) {
                this._percentHeight = 0;
            }
            return;
        }
        if (value > 100) {
            if (this._percentHeight !== 100) {
                this._percentHeight = 100;
            }
            return;
        }
        this._percentHeight = value;
        this.notify();
    }

    public get percentHeight(): number {
        return this._percentHeight;
    }

    public get measuredWidth(): number {
        if (isNaN(this.width) && !isNaN(this.percentWidth)) {
            return this.minWidth;
        }
        if (!isNaN(this.width)) {
            return this.width;
        }
        return this.internalWidth;
    }

    public get measuredHeight(): number {
        if (isNaN(this.height) && !isNaN(this.percentHeight)) {
            return this.minHeight;
        }
        if (!isNaN(this.height)) {
            return this.height;
        }
        return this.internalHeight;
    }

    private _actualWidth = 0;

    private set actualWidth(value: number) {
        this._actualWidth = value;
        this.style.width = this._actualWidth + 'px';
    }

    private get actualWidth(): number {
        return this._actualWidth;
    }

    private _actualHeight = 0;

    private set actualHeight(value: number) {
        this._actualHeight = value;
        this.style.height = this._actualHeight + 'px';
    }

    private get actualHeight(): number {
        return this._actualHeight;
    }

    protected internalSize(width: number, height: number): void {
        let widthChanged = false;
        if (width < this.minWidth) {
            this._internalWidth = this.minWidth;
            this.actualWidth = this._internalWidth;
            widthChanged = true;
        } else if (width > this.maxWidth) {
            this._internalWidth = this.maxWidth;
            this.actualWidth = this._internalWidth;
            widthChanged = true;
        } else if (this._internalWidth !== width) {
            this._internalWidth = width;
            this.actualWidth = this._internalWidth;
            widthChanged = true;
        }
        let heightChanged = false;
        if (height < this.minHeight) {
            this._internalHeight = this.minHeight;
            this.actualHeight = this._internalHeight;
            heightChanged = true;
        } else if (height > this.maxHeight) {
            this._internalHeight = this.maxHeight;
            this.actualHeight = this._internalHeight;
            heightChanged = true;
        } else if (this._internalHeight !== height) {
            this._internalHeight = height;
            this.actualHeight = this._internalHeight;
            heightChanged = true;
        }
        if (widthChanged || heightChanged) {
            this.notify();
        }
    }

    protected _internalWidth = 0;

    protected set internalWidth(value: number) {
        if (this._internalWidth === value) {
            return;
        }
        if (value < this.minWidth) {
            if (this._internalWidth !== this.minWidth) {
                this._internalWidth = this.minWidth;
                this.actualWidth = this._internalWidth;
                this.notify();
            }
            return;
        }
        if (value > this.maxWidth) {
            if (this._internalWidth !== this.maxWidth) {
                this._internalWidth = this.maxWidth;
                this.actualWidth = this._internalWidth;
                this.notify();
            }
            return;
        }
        this._internalWidth = value;
        this.actualWidth = this._internalWidth;
        this.notify();
    }

    protected get internalWidth(): number {
        return this._internalWidth;
    }

    protected _internalHeight = 0;

    protected set internalHeight(value: number) {
        if (this._internalHeight === value) {
            return;
        }
        if (value < this.minHeight) {
            if (this._internalHeight !== this.minHeight) {
                this._internalHeight = this.minHeight;
                this.actualHeight = this._internalHeight;
                this.notify();
            }
            return;
        }
        if (value > this.maxHeight) {
            if (this._internalHeight !== this.maxHeight) {
                this._internalHeight = this.maxHeight;
                this.actualHeight = this._internalHeight;
                this.notify();
            }
            return;
        }
        this._internalHeight = value;
        this.actualHeight = this._internalHeight;
        this.notify();
    }

    protected get internalHeight(): number {
        return this._internalHeight;
    }

    protected invalidateInternalSize(): void {
        if (!isNaN(this.width) && !isNaN(this.height)) {
            return;
        }
        if (isNaN(this.width) && isNaN(this.height)) {
            if (isNaN(this.percentWidth) && isNaN(this.percentHeight)) {
                this.updateInternalSize();
                return;
            }
            if (isNaN(this.percentWidth) && !isNaN(this.percentHeight)) {
                this.updateInternalWidth();
                return;
            }
            if (!isNaN(this.percentWidth) && isNaN(this.percentHeight)) {
                this.updateInternalHeight();
                return;
            }
        }
        if (isNaN(this.width) && !isNaN(this.height)) {
            if (isNaN(this.percentWidth)) {
                this.updateInternalWidth();
                return;
            }
        }
        if (!isNaN(this.width) && isNaN(this.height)) {
            if (isNaN(this.percentHeight)) {
                this.updateInternalHeight();
            }
        }
    }

    protected updateInternalSize(): void {
        console.log(this.name, 'updateInternalSize()');
    }

    protected updateInternalWidth(): void {
        console.log(this.name, 'updateInternalWidth()');
    }

    protected updateInternalHeight(): void {
        console.log(this.name, 'updateInternalHeight()');
    }

    private notify(): void {
        if (!this.connected) {
            return;
        }
        this.dispatch('invalidate', this, true);
    }
}
customElements.define('size-element', SizeElement);
