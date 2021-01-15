import EventDispatcher from '../event/EventDispatcher';
import IColor from '../interfaces/vo/IColor';
import ILinearGradient from '../interfaces/vo/ILinearGradient';

export default class LinearGradient extends EventDispatcher implements ILinearGradient {
    public constructor(degrees = 0, colors: Array<IColor> = []) {
        super();
        this.colorChanged = this.colorChanged.bind(this);
        if (this._degrees !== degrees) {
            if (isNaN(degrees) || degrees < 0 || degrees > 360) {
                if (this._degrees !== 0) {
                    this._degrees = 0;
                }
            } else {
                this._degrees = degrees;
            }
        }
        for (const color of colors) {
            this.colors.push(color);
            color.addEventListener('invalidate', this.colorChanged);
        }
    }

    private colorChanged(): void {
        this.notify();
    }

    private colors: Array<IColor> = [];

    public addColor(value: IColor): void {
        this.colors.push(value);
        value.addEventListener('invalidate', this.colorChanged);
        this.notify();
    }

    public addColors(value: Array<IColor>): void {
        for (const color of value) {
            this.colors.push(color);
        }
        if (value.length > 0) {
            this.notify();
        }
    }

    private _degrees = 0;

    public set degrees(value: number) {
        if (this._degrees === value) {
            return;
        }
        if (isNaN(value) || value < 0 || value >= 360) {
            if (this._degrees !== 0) {
                this._degrees = 0;
                this.notify();
                return;
            }
        }
        this._degrees = value;
        this.notify();
    }

    public get degrees(): number {
        return this._degrees;
    }

    public toString(): string {
        if (this.colors.length === 0) {
            return '';
        }
        let linearGradient = 'linear-gradient(' + this.degrees + 'deg, ';
        for (const color of this.colors) {
            linearGradient += color.toString() + ', '
        }
        return linearGradient.substr(0, linearGradient.length - 2) + ')';
    }

    private notify(): void {
        this.dispatch('invalidate');
    }
}
