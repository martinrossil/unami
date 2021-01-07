import ISizeElement from '../interfaces/core/ISizeElement';
import PositionElement from './PositionElement';

export default class SizeElement extends PositionElement implements ISizeElement {
    public constructor() {
        super();
        this.name = 'SizeElement';
    }

    public size(width: number, height: number): void {
        console.log(this.name, 'size(' + width + ', ' + height + ')');
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
            // invalidateInternalSize();
            return;
        }
        if (value < this.minWidth) {
            if (this._width !== this.minWidth) {
                this._width = this.minWidth;
                // invalidateSize();
            }
            return;
        }
        if (value > this.maxWidth) {
            if (this._width !== this.maxWidth) {
                this._width = this.maxWidth;
                // invalidateSize();
            }
            return;
        }
        this._width = value;
        // invalidateSize();
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
            // invalidateInternalSize();
            return;
        }
        if (value < this.minHeight) {
            if (this._height !== this.minHeight) {
                this._height = this.minHeight;
                // invalidateSize();
            }
            return;
        }
        if (value > this.maxHeight) {
            if (this._height !== this.maxHeight) {
                this._height = this.maxHeight;
                // invalidateSize();
            }
            return;
        }
        this._height = value;
        // invalidateSize();
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
}
customElements.define('size-element', SizeElement);
