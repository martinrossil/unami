import IFilter from '../interfaces/filters/IFilter';
import IPathElement from '../interfaces/svg/IPathElement';
import IColor from '../interfaces/vo/IColor';
import ILinearGradient from '../interfaces/vo/ILinearGradient';
import SvgElement from './SvgElement';

export default class PathElement extends SvgElement implements IPathElement {
    public constructor() {
        super();
        this.name = 'PathElement';
        this.strokeColorChanged = this.strokeColorChanged.bind(this);
        this.fillColorChanged = this.fillColorChanged.bind(this);
        this.filtersChanged = this.filtersChanged.bind(this);
        this.group.appendChild(this.path);
    }

    private filters: Array<IFilter> = [];

    public addFilter(value: IFilter): void {
        this.filters.push(value);
        value.addEventListener('invalidate', this.filtersChanged);
        this.filtersChanged();
    }

    private strokeColorChanged(): void {
        if (this.strokeColor) {
            this.path.setAttribute('stroke', this.strokeColor.toString());
            return;
        }
        this.path.removeAttribute('stroke');
    }

    private fillColorChanged(): void {
        if (this.fillColor) {
            this.path.setAttribute('fill', this.fillColor.toString());
            return;
        }
        this.path.removeAttribute('fill');
    }

    private filtersChanged(): void {
        console.log(this.name, 'filtersChanged()');
        let filterString = '';
        if (this.filters.length === 0) {
            this.style.filter = filterString;
            return;
        }
        for (const filter of this.filters) {
            console.log('filter', filter.toString());
            filterString += filter.toString() + ' ';
        }
        this.style.filter = filterString.substr(0, filterString.length - 2);
        console.log('filter', this.style.filter);
    }

    private _pathData = '';

    public set pathData(value: string) {
        if (this._pathData === value) {
            return;
        }
        this._pathData = value;
        this.path.setAttribute('d', value);
    }

    public get pathData(): string {
        return this._pathData;
    }

    private _path!: SVGPathElement;

    private get path(): SVGPathElement {
        if (!this._path) {
            this._path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        }
        return this._path;
    }

    private _strokeColor: IColor | ILinearGradient | null = null;

    public set strokeColor(value: IColor | ILinearGradient | null) {
        if (this._strokeColor === value) {
            return;
        }
        if (this._strokeColor) {
            this._strokeColor.removeEventListener('invalidate', this.strokeColorChanged);
        }
        this._strokeColor = value;
        if (this._strokeColor) {
            this._strokeColor.addEventListener('invalidate', this.strokeColorChanged);
        }
        this.strokeColorChanged();
    }

    public get strokeColor(): IColor | ILinearGradient | null {
        return this._strokeColor;
    }

    private _fillColor: IColor | ILinearGradient | null = null;

    public set fillColor(value: IColor | ILinearGradient | null) {
        if (this._fillColor === value) {
            return;
        }
        if (this._fillColor) {
            this._fillColor.removeEventListener('invalidate', this.fillColorChanged);
        }
        this._fillColor = value;
        if (this._fillColor) {
            this._fillColor.addEventListener('invalidate', this.fillColorChanged);
        }
        this.fillColorChanged();
    }

    public get fillColor(): IColor | ILinearGradient | null {
        return this._fillColor;
    }
}
customElements.define('path-element', PathElement);
