import IPathElement from '../interfaces/svg/IPathElement';
import IColor from '../interfaces/vo/IColor';
import ILinearGradient from '../interfaces/vo/ILinearGradient';
import LinearGradient from '../vo/LinearGradient';
import SvgElement from './SvgElement';

export default class PathElement extends SvgElement implements IPathElement {
    public constructor() {
        super();
        this.name = 'PathElement';
        this.strokeColorChanged = this.strokeColorChanged.bind(this);
        this.fillColorChanged = this.fillColorChanged.bind(this);
        this.group.appendChild(this.path);
    }

    private strokeColorChanged(): void {
        if (this.strokeColor) {
            this.path.setAttribute('stroke', this.strokeColor.toString());
            return;
        }
        this.path.removeAttribute('stroke');
    }

    private fillColorChanged(): void {
        console.log(this.name, 'fillColorChanged()');
        if (this.fillColor) {
            if (this.fillColor instanceof LinearGradient) {
                // this.defs.contains
                this.fillLinearGradient.setAttribute('gradientTransform', 'rotate(' + this.fillColor.degrees + ')'); // gradientTransform="rotate(90)"
                return;
            }
            this.path.setAttribute('fill', this.fillColor.toString());
            return;
        }
        this.path.removeAttribute('fill');
    }

    private fillLinearGradientId = Math.random().toString();

    private _fillLinearGradient!: SVGLinearGradientElement

    private get fillLinearGradient(): SVGLinearGradientElement {
        if (!this._fillLinearGradient) {
            this._fillLinearGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            this._fillLinearGradient.id = this.fillLinearGradientId;
            this._fillLinearGradient.setAttribute('gradientUnits', 'userSpaceOnUse');
            // this._fillLinearGradient.setAttribute('id', this.fillLinearGradientId);
            const stop: SVGStopElement = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop.setAttribute('stop-color', 'red');
            stop.setAttribute('offset', '0.0');
            const stop2: SVGStopElement = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
            stop2.setAttribute('stop-color', 'yellow');
            stop2.setAttribute('offset', '1.0');
            this._fillLinearGradient.appendChild(stop);
            this._fillLinearGradient.appendChild(stop2);
        }
        return this._fillLinearGradient;
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

    protected get path(): SVGPathElement {
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
            /* if (this._fillColor instanceof LinearGradient) {
                this.fillLinearGradient.
                this.defs.removeChild(this.fillLinearGradient);
            } */
            this._fillColor.removeEventListener('invalidate', this.fillColorChanged);
        }
        this._fillColor = value;
        if (this._fillColor) {
            if (this._fillColor instanceof LinearGradient) {
                this.defs.appendChild(this.fillLinearGradient);
                this.path.setAttribute('fill', "url('#" + this.fillLinearGradientId + "')");
            }
            this._fillColor.addEventListener('invalidate', this.fillColorChanged);
        }
        this.fillColorChanged();
    }

    public get fillColor(): IColor | ILinearGradient | null {
        return this._fillColor;
    }

    private _strokeWidth = 0;

    public set strokeWidth(value: number) {
        if (this._strokeWidth === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._strokeWidth !== 0) {
                this._strokeWidth = 0;
                this.path.removeAttribute('stroke-width');
            }
            return;
        }
        this._strokeWidth = value;
        this.path.setAttribute('stroke-width', this._strokeWidth.toString());
    }

    public get strokeWidth(): number {
        return this._strokeWidth;
    }
}
customElements.define('path-element', PathElement);
