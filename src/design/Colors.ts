import IColorScale from '../interfaces/design/IColorScale';
import IColors from '../interfaces/design/IColors';
import Color from '../vo/Color';
import ColorScale from './ColorScale';

export default class Colors implements IColors {
    public constructor() {
        this.name = 'Colors';
    }

    private _primary!: IColorScale;

    public get primary(): IColorScale {
        if (!this._primary) {
            this._primary = new ColorScale(); // Teal
            this._primary.c50 = new Color(166, 76, 97);
            this._primary.c100 = new Color(167, 85, 89);
            this._primary.c200 = new Color(168, 84, 78);
            this._primary.c300 = new Color(171, 77, 64);
            this._primary.c400 = new Color(172, 66, 50);
            this._primary.c500 = new Color(173, 80, 40);
            this._primary.c600 = new Color(175, 84, 32);
            this._primary.c700 = new Color(175, 77, 26);
            this._primary.c800 = new Color(176, 69, 22);
            this._primary.c900 = new Color(176, 61, 19);
        }
        return this._primary;
    }

    private _secondary!: IColorScale;

    public get secondary(): IColorScale {
        if (!this._secondary) {
            this._secondary = new ColorScale(); // Pink
            this._secondary.c50 = new Color(327, 73, 97);
            this._secondary.c100 = new Color(326, 78, 95);
            this._secondary.c200 = new Color(326, 85, 90);
            this._secondary.c300 = new Color(327, 87, 82);
            this._secondary.c400 = new Color(329, 86, 70);
            this._secondary.c500 = new Color(330, 81, 60);
            this._secondary.c600 = new Color(333, 71, 51);
            this._secondary.c700 = new Color(335, 78, 42);
            this._secondary.c800 = new Color(336, 74, 35);
            this._secondary.c900 = new Color(336, 69, 30);
        }
        return this._secondary;
    }

    private _success!: IColorScale;

    public get success(): IColorScale {
        if (!this._success) {
            this._success = new ColorScale();
            this._success.c50 = new Color(138, 76, 97);
            this._success.c100 = new Color(141, 84, 93);
            this._success.c200 = new Color(141, 79, 85);
            this._success.c300 = new Color(142, 77, 73);
            this._success.c400 = new Color(142, 69, 58);
            this._success.c500 = new Color(142, 71, 45);
            this._success.c600 = new Color(142, 76, 36);
            this._success.c700 = new Color(142, 72, 29);
            this._success.c800 = new Color(143, 64, 24);
            this._success.c900 = new Color(144, 61, 20);
        }
        return this._success;
    }

    private _danger!: IColorScale;

    public get danger(): IColorScale {
        if (!this._danger) {
            this._danger = new ColorScale();
            this._danger.c50 = new Color(0, 86, 97);
            this._danger.c100 = new Color(0, 93, 94);
            this._danger.c200 = new Color(0, 96, 89);
            this._danger.c300 = new Color(0, 94, 82);
            this._danger.c400 = new Color(0, 91, 71);
            this._danger.c500 = new Color(0, 84, 60);
            this._danger.c600 = new Color(0, 72, 51);
            this._danger.c700 = new Color(0, 74, 42);
            this._danger.c800 = new Color(0, 70, 35);
            this._danger.c900 = new Color(0, 63, 31);
        }
        return this._danger;
    }

    private _neutral!: IColorScale;

    public get neutral(): IColorScale {
        if (!this._neutral) {
            this._neutral = new ColorScale();
        }
        return this._neutral;
    }

    public name = '';
}
