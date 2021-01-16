import SizeElement from './SizeElement';
import IDisplayElement from '../interfaces/core/IDisplayElement';
import IColor from '../interfaces/vo/IColor';
import ILinearGradient from '../interfaces/vo/ILinearGradient';
import LinearGradient from '../vo/LinearGradient';
import IFilter from '../interfaces/filters/IFilter';
import BoxShadowFilter from '../filters/BoxShadowFilter';

export default class DisplayElement extends SizeElement implements IDisplayElement {
    public constructor() {
        super();
        this.name = 'DisplayElement';
        this.backgroundColorChanged = this.backgroundColorChanged.bind(this);
        this.filtersChanged = this.filtersChanged.bind(this);
        this.style.border = 'none';
        this.style.outline = 'none';
        this.style.boxSizing = 'border-box';
    }

    private filters: Array<IFilter> = [];

    public addFilter(value: IFilter): void {
        this.filters.push(value);
        value.addEventListener('invalidate', this.filtersChanged);
        this.filtersChanged();
    }

    private filtersChanged(): void {
        console.log(this.name, 'filtersChanged()');
        let filterString = '';
        let boxShadowString = '';
        if (this.filters.length === 0) {
            this.style.filter = filterString;
            this.style.boxShadow = boxShadowString;
            return;
        }
        for (const filter of this.filters) {
            console.log('filter', filter.toString());
            if (filter instanceof BoxShadowFilter) {
                boxShadowString += filter.toString() + ', ';
            } else {
                filterString += filter.toString() + ' ';
            }
        }
        this.style.filter = filterString.substr(0, filterString.length - 2);
        this.style.boxShadow = boxShadowString.substr(0, boxShadowString.length - 2);
        console.log('filter', this.style.filter, 'box', this.style.boxShadow);
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

    private _visible = true;

    public set visible(value: boolean) {
        if (this._visible === value) {
            return;
        }
        this._visible = value;
        if (this._visible) {
            this.style.visibility = '';
            return;
        }
        this.style.visibility = 'hidden';
    }

    public get visible(): boolean {
        return this._visible;
    }
}
customElements.define('display-element', DisplayElement);
