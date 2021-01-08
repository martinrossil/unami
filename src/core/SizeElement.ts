import ISizeElement from '../interfaces/core/ISizeElement';
import PositionElement from './PositionElement';

export default class SizeElement extends PositionElement implements ISizeElement {
    public constructor() {
        super();
        this.name = 'SizeElement';
    }

    public size(width: number, height: number): void {
        let widthChanged = false;
        let widthIsNaN = false;
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
            widthIsNaN = true;
        }
        let heightChanged = false;
        let heightIsNaN = false;
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
            heightIsNaN = true;
        }
        if (widthChanged && heightChanged) {
            if (!widthIsNaN && !heightIsNaN) {
                this.sizeChanged(this._width, this._height);
                return;
            }
            if (widthIsNaN && heightIsNaN) {
                this.updateInternalSize();
                return;
            }
            if (!widthIsNaN && heightIsNaN) {
                this.widthChanged(this._width);
                this.updateInternalHeight();
                return;
            }
            if (widthIsNaN && !heightIsNaN) {
                this.heightChanged(this._height);
                this.updateInternalWidth();
                return;
            }
        }
        if (widthChanged && !heightChanged) {
            if (widthIsNaN) {
                this.updateInternalWidth();
                return;
            }
            this.widthChanged(this._width);
            return;
        }
        if (!widthChanged && heightChanged) {
            if (heightIsNaN) {
                this.updateInternalHeight();
                return;
            }
            this.heightChanged(this._height);
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
        if (isNaN(value)) {
            this._width = value;
            this.updateInternalWidth();
            return;
        }
        if (value < this.minWidth) {
            if (this._width !== this.minWidth) {
                this._width = this.minWidth;
                this.actualWidth = this._width;
                this.widthChanged(this._width);
            }
            return;
        }
        if (value > this.maxWidth) {
            if (this._width !== this.maxWidth) {
                this._width = this.maxWidth;
                this.actualWidth = this._width;
                this.widthChanged(this._width);
            }
            return;
        }
        this._width = value;
        this.actualWidth = this._width;
        this.widthChanged(this._width);
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
        if (isNaN(value)) {
            this._height = value;
            this.updateInternalHeight();
            return;
        }
        if (value < this.minHeight) {
            if (this._height !== this.minHeight) {
                this._height = this.minHeight;
                this.actualHeight = this._height;
                this.heightChanged(this._height);
            }
            return;
        }
        if (value > this.maxHeight) {
            if (this._height !== this.maxHeight) {
                this._height = this.maxHeight;
                this.actualHeight = this._height;
                this.heightChanged(this._height);
            }
            return;
        }
        this._height = value;
        this.actualHeight = this._height;
        this.heightChanged(this._height);
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

    public set percentWidth(value: number) {
        console.log(this.name, 'set percentWidth =', value);
    }

    public get percentWidth(): number {
        return NaN;
    }

    public set percentHeight(value: number) {
        console.log(this.name, 'set percentHeight =', value);
    }

    public get percentHeight(): number {
        return NaN;
    }

    public get measuredWidth(): number {
        if (!isNaN(this.width)) {
            return this.width;
        }
        return this.internalWidth;
    }

    public get measuredHeight(): number {
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
        console.log(this.name, 'internalSize(' + width + ', ' + height + ')');
    }

    protected _internalWidth = 0;

    protected set internalWidth(value: number) {
        console.log(this.name, 'set internalWidth', value);
    }

    protected get internalWidth(): number {
        return this._internalWidth;
    }

    protected _internalHeight = 0;

    protected set internalHeight(value: number) {
        console.log(this.name, 'set internalHeight', value);
    }

    protected get internalHeight(): number {
        return this._internalHeight;
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

    protected sizeChanged(width: number, height: number): void {
        console.log(this.name, 'sizeChanged(' + width + ', ' + height + ')');
    }

    protected widthChanged(width: number): void {
        console.log(this.name, 'widthChanged(' + width + ')');
    }

    protected heightChanged(height: number): void {
        console.log(this.name, 'heightChanged(' + height + ')');
    }
}
customElements.define('size-element', SizeElement);
