import IColorRange from '../interfaces/design/IColorRange';
import IColors from '../interfaces/design/IColors';
import Color from '../vo/Color';
import ColorRange from './ColorRange';

export default class Colors implements IColors {
    public constructor() {
        this.name = 'Colors';
    }

    private _primary!: IColorRange;

    public get primary(): IColorRange {
        if (!this._primary) {
            this._primary = new ColorRange();
        }
        return this._primary;
    }

    private _success!: IColorRange;

    public get success(): IColorRange {
        if (!this._success) {
            this._success = new ColorRange();
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

    private _danger!: IColorRange;

    public get danger(): IColorRange {
        if (!this._danger) {
            this._danger = new ColorRange();
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

    public name = '';
}
