import EventDispatcher from '../event/EventDispatcher';
import IColors from '../interfaces/design/IColors';
import ITheme from '../interfaces/design/ITheme';
import ITypography from '../interfaces/design/ITypography';
import Colors from './Colors';
import Typography from './Typography';

export default class Theme extends EventDispatcher implements ITheme {
    public constructor() {
        super();
        this.name = 'Theme';
    }

    private _colors!: IColors;

    public get colors(): IColors {
        if (!this._colors) {
            this._colors = new Colors();
        }
        return this._colors;
    }

    private _typography!: ITypography;

    public get typography(): ITypography {
        if (!this._typography) {
            this._typography = new Typography();
        }
        return this._typography;
    }
}
