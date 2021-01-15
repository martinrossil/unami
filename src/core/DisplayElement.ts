import SizeElement from './SizeElement';
import IDisplayElement from '../interfaces/core/IDisplayElement';
import IColor from '../interfaces/vo/IColor';
import ILinearGradient from '../interfaces/vo/ILinearGradient';
import LinearGradient from '../vo/LinearGradient';

export default class DisplayElement extends SizeElement implements IDisplayElement {
    public constructor() {
        super();
        this.name = 'DisplayElement';
        this.backgroundColorChanged = this.backgroundColorChanged.bind(this);
        this.style.border = 'none';
        this.style.outline = 'none';
        this.style.boxSizing = 'border-box';
    }

    private backgroundColorChanged(): void {
        if (this.backgroundColor) {
            if (this.backgroundColor instanceof LinearGradient) {
                this.style.backgroundColor = '';
                this.style.background = this.backgroundColor.toString();
                return;
            }
            this.style.background = '';
            this.style.backgroundColor = this.backgroundColor.toString();
            return;
        }
        this.style.backgroundColor = '';
        this.style.background = '';
    }

    private _backgroundColor: IColor | ILinearGradient | null = null;

    public set backgroundColor(value: IColor | ILinearGradient | null) {
        if (this._backgroundColor === value) {
            return;
        }
        if (this._backgroundColor) {
            this._backgroundColor.removeEventListener('invalidate', this.backgroundColorChanged);
        }
        this._backgroundColor = value;
        if (this._backgroundColor) {
            this._backgroundColor.addEventListener('invalidate', this.backgroundColorChanged);
        }
        this.backgroundColorChanged();
    }

    public get backgroundColor(): IColor | ILinearGradient | null {
        return this._backgroundColor;
    }

    protected _cornerSize = 0;

    public set cornerSize(value: number) {
        if (this._cornerSize === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._cornerSize !== 0) {
                this._cornerSize = 0;
                this.style.borderRadius = '0';
            }
            return;
        }
        this._cornerSize = value;
        this.style.borderRadius = this._cornerSize + 'px';
    }

    public get cornerSize(): number {
        return this._cornerSize;
    }
}
customElements.define('display-element', DisplayElement);
