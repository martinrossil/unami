import IEventListener from '../interfaces/event/IEventListener';
import IPathElement from '../interfaces/svg/IPathElement';
import IColor from '../interfaces/vo/IColor';
import ILinearGradient from '../interfaces/vo/ILinearGradient';
import Color from '../vo/Color';
import LinearGradient from '../vo/LinearGradient';
import SvgElement from './SvgElement';

export default class PathElement extends SvgElement implements IPathElement {
    public constructor() {
        super();
        this.name = 'PathElement';
        this.strokeColorChanged = this.strokeColorChanged.bind(this);
        this.fillColorChanged = this.fillColorChanged.bind(this);
        this.fillLinearGradientColorAdded = this.fillLinearGradientColorAdded.bind(this);
        this.fillLinearGradientColorsAdded = this.fillLinearGradientColorsAdded.bind(this);
        this.fillLinearGradientColorChanged = this.fillLinearGradientColorChanged.bind(this);
        this.fillLinearGradientDegreesChanged = this.fillLinearGradientDegreesChanged.bind(this);
        this.group.appendChild(this.path);
    }

    private strokeColorChanged(): void {
        if (this.strokeColor) {
            this.path.setAttribute('stroke', this.strokeColor.toString());
            return;
        }
        this.path.removeAttribute('stroke');
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

    private fillLinearGradientId = Math.random().toString();

    private _fillLinearGradient!: SVGLinearGradientElement

    private get fillLinearGradient(): SVGLinearGradientElement {
        if (!this._fillLinearGradient) {
            this._fillLinearGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            this._fillLinearGradient.setAttribute('id', this.fillLinearGradientId);
            this._fillLinearGradient.setAttribute('gradientUnits', 'userSpaceOnUse');
        }
        return this._fillLinearGradient;
    }

    private resetFillLinearGradient(): void {
        while (this.fillLinearGradient.firstChild) {
            this.fillLinearGradient.removeChild(this.fillLinearGradient.firstChild);
        }
        this.fillLinearGradient.removeAttribute('gradientTransform');
    }

    private fillColorChanged(): void {
        console.log(this.name, 'fillColorChanged()');
        if (this.fillColor instanceof Color) {
            this.path.setAttribute('fill', this.fillColor.toString());
            return;
        }
        /* if (this.fillColor) {
            if (this.fillColor instanceof LinearGradient) {
                // this.defs.contains
                this.fillLinearGradient.setAttribute('gradientTransform', 'rotate(' + this.fillColor.degrees + ')'); // gradientTransform="rotate(90)"
                return;
            }
            this.path.setAttribute('fill', this.fillColor.toString());
            return;
        } */
        this.path.removeAttribute('fill');
    }

    private fillLinearGradientColorChanged(e: CustomEvent<Color>): void {
        const color: Color = e.detail;
        const stops: Array<SVGStopElement> | undefined = this.fillColorStopMapping.get(color);
        if (stops) {
            for (const stop of stops) {
                stop.setAttribute('stop-color', color.toString());
            }
        }
    }

    private fillLinearGradientColorAdded(e: CustomEvent<Color>): void {
        this.addStopColorToFillLinearGradient(e.detail);
        this.updateFillLinearGradientStopOffsets();
    }

    private fillLinearGradientColorsAdded(e: CustomEvent<Array<Color>>): void {
        this.addStopColorsToFillLinearGradient(e.detail);
        this.updateFillLinearGradientStopOffsets();
    }

    private fillLinearGradientDegreesChanged(e: CustomEvent<number>): void {
        console.log(e.detail); // translate(200, 200)
        this.fillLinearGradient.setAttribute('gradientTransform', 'rotate(' + e.detail + ' 200 200)');
    }

    private _fillColor: IColor | ILinearGradient | null = null;

    public set fillColor(value: IColor | ILinearGradient | null) {
        if (this._fillColor === value) {
            return;
        }
        if (this._fillColor instanceof Color) {
            this._fillColor.removeEventListener(Color.CHANGED, this.fillColorChanged);
        } else if (this._fillColor instanceof LinearGradient) {
            this.defs.removeChild(this.fillLinearGradient);
            this.resetFillLinearGradient();
            this.fillColorStopMapping.clear();
            this._fillColor.removeEventListener(LinearGradient.COLOR_ADDED, this.fillLinearGradientColorAdded as IEventListener);
            this._fillColor.removeEventListener(LinearGradient.COLORS_ADDED, this.fillLinearGradientColorsAdded as IEventListener);
            this._fillColor.removeEventListener(LinearGradient.COLOR_CHANGED, this.fillLinearGradientColorChanged as IEventListener);
            this._fillColor.removeEventListener(LinearGradient.DEGREES_CHANGED, this.fillLinearGradientDegreesChanged as IEventListener);
        }
        this._fillColor = value;
        if (this._fillColor instanceof Color) {
            this._fillColor.addEventListener(Color.CHANGED, this.fillColorChanged);
            this.path.setAttribute('fill', this._fillColor.toString());
            return;
        }
        if (this._fillColor instanceof LinearGradient) { // translate(200, 200)
            this.fillLinearGradient.setAttribute('gradientTransform', 'rotate(' + this._fillColor.degrees + ' 200 200)');
            if (this._fillColor.colors.length) {
                this.addStopColorsToFillLinearGradient(this._fillColor.colors);
                this.updateFillLinearGradientStopOffsets();
            }
            this.defs.appendChild(this.fillLinearGradient);
            this._fillColor.addEventListener(LinearGradient.COLOR_ADDED, this.fillLinearGradientColorAdded as IEventListener);
            this._fillColor.addEventListener(LinearGradient.COLORS_ADDED, this.fillLinearGradientColorsAdded as IEventListener);
            this._fillColor.addEventListener(LinearGradient.COLOR_CHANGED, this.fillLinearGradientColorChanged as IEventListener);
            this._fillColor.addEventListener(LinearGradient.DEGREES_CHANGED, this.fillLinearGradientDegreesChanged as IEventListener);
            this.path.setAttribute('fill', "url('#" + this.fillLinearGradientId + "')");
            return;
        }
        this.path.removeAttribute('fill');
    }

    public get fillColor(): IColor | ILinearGradient | null {
        return this._fillColor;
    }

    private addStopColorsToFillLinearGradient(colors: Array<IColor>): void {
        for (const color of colors) {
            this.addStopColorToFillLinearGradient(color);
        }
    }

    private addStopColorToFillLinearGradient(color: IColor): void {
        const stop: SVGStopElement = this.getStopFromColor(color);
        let stops: Array<SVGStopElement> | undefined = this.fillColorStopMapping.get(color);
        if (!stops) {
            stops = [];
        }
        stops.push(stop);
        this.fillColorStopMapping.set(color, stops);
        this.fillLinearGradient.appendChild(stop);
    }

    private getStopFromColor(color: IColor): SVGStopElement {
        const stop: SVGStopElement = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop.setAttribute('stop-color', color.toString());
        return stop;
    }

    private updateFillLinearGradientStopOffsets(): void {
        if (this.fillLinearGradient.childNodes.length) {
            let offset = 0.0;
            const offsetStep = 1 / (this.fillLinearGradient.childNodes.length - 1);
            for (const child of this.fillLinearGradient.childNodes) {
                const stop: SVGStopElement = child as SVGStopElement;
                stop.setAttribute('offset', offset + '');
                offset = offset + offsetStep;
            }
        }
    }

    private fillColorStopMapping: Map<IColor, Array<SVGStopElement>> = new Map();

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
