import ITypography from '../interfaces/design/ITypography';
import ITypeFace from '../interfaces/vo/ITypeFace';
import TypeFace from '../vo/TypeFace';

export default class Typography implements ITypography {
    private _primary!: ITypeFace;

    public set primary(value: ITypeFace) {
        if (this._primary === value) {
            return;
        }
        this._primary = value;
    }

    public get primary(): ITypeFace {
        if (!this._primary) {
            this._primary = new TypeFace('Arial', 0.715, 0.11, 0.015);
        }
        return this._primary;
    }

    private _secondary!: ITypeFace;

    public set secondary(value: ITypeFace) {
        if (this._secondary === value) {
            return;
        }
        this._secondary = value;
    }

    public get secondary(): ITypeFace {
        if (!this._secondary) {
            this._secondary = new TypeFace('Verdana', 0.73, 0.13, 0.044);
        }
        return this._secondary;
    }
}
