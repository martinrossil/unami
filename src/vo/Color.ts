import IColor from '../interfaces/vo/IColor';

export default class Color implements IColor {
    public static NONE = '';
    public constructor(hue = 0, saturation = 0, lightness = 0, opacity = 1.0) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
        this.opacity = opacity;
    }

    private _hue = 0;

    public set hue(value: number) {
        if (this._hue === value) {
            return;
        }
        if (isNaN(value) || value < 0 || value > 360) {
            if (this._hue !== 0) {
                this._hue = 0;
            }
            return;
        }
        this._hue = value;
    }

    public get hue(): number {
        return this._hue;
    }

    private _saturation = 0;

    public set saturation(value: number) {
        if (this._saturation === value) {
            return;
        }
        if (isNaN(value) || value < 0 || value > 100) {
            if (this._saturation !== 0) {
                this._saturation = 0;
            }
        }
        this._saturation = value;
    }

    public get saturation(): number {
        return this._saturation;
    }

    private _lightness = 0;

    public set lightness(value: number) {
        if (this._lightness === value) {
            return;
        }
        if (isNaN(value) || value < 0 || value > 100) {
            if (this._lightness !== 0) {
                this._lightness = 0;
            }
        }
        this._lightness = value;
    }

    public get lightness(): number {
        return this._lightness;
    }

    private _opacity = 1.0;

    public set opacity(value: number) {
        if (this._opacity === value) {
            return;
        }
        if (isNaN(value) || value < 0 || value > 1.0) {
            if (this._opacity !== 1.0) {
                this._opacity = 1.0;
            }
        }
        this._opacity = value;
    }

    public get opacity(): number {
        return this._opacity;
    }

    public toString(): string {
        return 'hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.lightness + '%, ' + this.opacity + ')';
    }
}
