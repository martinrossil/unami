import IColorScale from '../interfaces/design/IColorScale';
import IColor from '../interfaces/vo/IColor';
import Color from '../vo/Color';

export default class ColorScale implements IColorScale {
    private _c0!: IColor;

    public set c0(value: IColor) {
        this._c0 = value;
    }

    public get c0(): IColor {
        if (!this._c0) {
            this._c0 = new Color(0, 0, 100); // White
        }
        return this._c0;
    }

    private _c50!: IColor;

    public set c50(value: IColor) {
        this._c50 = value;
    }

    public get c50(): IColor {
        if (!this._c50) {
            this._c50 = new Color(0, 0, 98); // Gray 50
        }
        return this._c50;
    }

    private _c100!: IColor;

    public set c100(value: IColor) {
        this._c100 = value;
    }

    public get c100(): IColor {
        if (!this._c100) {
            this._c100 = new Color(240, 5, 96); // Gray 100
        }
        return this._c100;
    }

    private _c200!: IColor;

    public set c200(value: IColor) {
        this._c200 = value;
    }

    public get c200(): IColor {
        if (!this._c200) {
            this._c200 = new Color(240, 6, 90); // Gray 200
        }
        return this._c200;
    }

    private _c300!: IColor;

    public set c300(value: IColor) {
        this._c300 = value;
    }

    public get c300(): IColor {
        if (!this._c300) {
            this._c300 = new Color(240, 5, 84); // Gray 300
        }
        return this._c300;
    }

    private _c400!: IColor;

    public set c400(value: IColor) {
        this._c400 = value;
    }

    public get c400(): IColor {
        if (!this._c400) {
            this._c400 = new Color(240, 5, 65); // Gray 400
        }
        return this._c400;
    }

    private _c500!: IColor;

    public set c500(value: IColor) {
        this._c500 = value;
    }

    public get c500(): IColor {
        if (!this._c500) {
            this._c500 = new Color(240, 4, 46); // Gray 500
        }
        return this._c500;
    }

    private _c600!: IColor;

    public set c600(value: IColor) {
        this._c600 = value;
    }

    public get c600(): IColor {
        if (!this._c600) {
            this._c600 = new Color(240, 5, 34); // Gray 600
        }
        return this._c600;
    }

    private _c700!: IColor;

    public set c700(value: IColor) {
        this._c700 = value;
    }

    public get c700(): IColor {
        if (!this._c700) {
            this._c700 = new Color(240, 5, 26); // Gray 700
        }
        return this._c700;
    }

    private _c800!: IColor;

    public set c800(value: IColor) {
        this._c800 = value;
    }

    public get c800(): IColor {
        if (!this._c800) {
            this._c800 = new Color(240, 4, 16); // Gray 800
        }
        return this._c800;
    }

    private _c900!: IColor;

    public set c900(value: IColor) {
        this._c900 = value;
    }

    public get c900(): IColor {
        if (!this._c900) {
            this._c900 = new Color(240, 6, 10); // Gray 900
        }
        return this._c900;
    }

    private _c1000!: IColor;

    public set c1000(value: IColor) {
        this._c1000 = value;
    }

    public get c1000(): IColor {
        if (!this._c1000) {
            this._c1000 = new Color(0, 0, 0); // Black
        }
        return this._c1000;
    }
}
