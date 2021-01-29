import ITypeScale from '../interfaces/design/ITypeScale';
import ITypography from '../interfaces/design/ITypography';
import ITypeFace from '../interfaces/vo/ITypeFace';
import TypeFace from '../vo/TypeFace';
import TypeScale from './TypeScale';

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

    private _headline1!: ITypeScale;

    public set headline1(value: ITypeScale) {
        if (this._headline1 === value) {
            return;
        }
        this._headline1 = value;
    }

    public get headline1(): ITypeScale {
        if (!this._headline1) {
            this._headline1 = new TypeScale(this.primary, 300, 96, -1.5);
        }
        return this._headline1;
    }

    private _headline2!: ITypeScale;

    public set headline2(value: ITypeScale) {
        if (this._headline2 === value) {
            return;
        }
        this._headline2 = value;
    }

    public get headline2(): ITypeScale {
        if (!this._headline2) {
            this._headline2 = new TypeScale(this.primary, 300, 60, -0.5);
        }
        return this._headline2;
    }

    private _headline3!: ITypeScale;

    public set headline3(value: ITypeScale) {
        if (this._headline3 === value) {
            return;
        }
        this._headline3 = value;
    }

    public get headline3(): ITypeScale {
        if (!this._headline3) {
            this._headline3 = new TypeScale(this.primary, 400, 48, 0);
        }
        return this._headline3;
    }

    private _headline4!: ITypeScale;

    public set headline4(value: ITypeScale) {
        if (this._headline4 === value) {
            return;
        }
        this._headline4 = value;
    }

    public get headline4(): ITypeScale {
        if (!this._headline4) {
            this._headline4 = new TypeScale(this.primary, 400, 34, 0.25);
        }
        return this._headline4;
    }

    private _headline5!: ITypeScale;

    public set headline5(value: ITypeScale) {
        if (this._headline5 === value) {
            return;
        }
        this._headline5 = value;
    }

    public get headline5(): ITypeScale {
        if (!this._headline5) {
            this._headline5 = new TypeScale(this.primary, 400, 24, 0);
        }
        return this._headline5;
    }

    private _headline6!: ITypeScale;

    public set headline6(value: ITypeScale) {
        if (this._headline6 === value) {
            return;
        }
        this._headline6 = value;
    }

    public get headline6(): ITypeScale {
        if (!this._headline6) {
            this._headline6 = new TypeScale(this.primary, 500, 20, 0.15);
        }
        return this._headline6;
    }

    private _subtitle1!: ITypeScale;

    public set subtitle1(value: ITypeScale) {
        if (this._subtitle1 === value) {
            return;
        }
        this._subtitle1 = value;
    }

    public get subtitle1(): ITypeScale {
        if (!this._subtitle1) {
            this._subtitle1 = new TypeScale(this.secondary, 400, 16, 0.15);
        }
        return this._subtitle1;
    }

    private _subtitle2!: ITypeScale;

    public set subtitle2(value: ITypeScale) {
        if (this._subtitle2 === value) {
            return;
        }
        this._subtitle2 = value;
    }

    public get subtitle2(): ITypeScale {
        if (!this._subtitle2) {
            this._subtitle2 = new TypeScale(this.secondary, 500, 14, 0.1);
        }
        return this._subtitle2;
    }

    private _body1!: ITypeScale;

    public set body1(value: ITypeScale) {
        if (this._body1 === value) {
            return;
        }
        this._body1 = value;
    }

    public get body1(): ITypeScale {
        if (!this._body1) {
            this._body1 = new TypeScale(this.secondary, 400, 16, 0.5);
        }
        return this._body1;
    }

    private _body2!: ITypeScale;

    public set body2(value: ITypeScale) {
        if (this._body2 === value) {
            return;
        }
        this._body2 = value;
    }

    public get body2(): ITypeScale {
        if (!this._body2) {
            this._body2 = new TypeScale(this.secondary, 400, 14, 0.25);
        }
        return this._body2;
    }

    private _button!: ITypeScale;

    public set button(value: ITypeScale) {
        if (this._button === value) {
            return;
        }
        this._button = value;
    }

    public get button(): ITypeScale {
        if (!this._button) {
            this._button = new TypeScale(this.secondary, 500, 14, 1.25);
        }
        return this._button;
    }

    private _caption!: ITypeScale;

    public set caption(value: ITypeScale) {
        if (this._caption === value) {
            return;
        }
        this._caption = value;
    }

    public get caption(): ITypeScale {
        if (!this._caption) {
            this._caption = new TypeScale(this.secondary, 400, 12, 0.4);
        }
        return this._caption;
    }

    private _overline!: ITypeScale;

    public set overline(value: ITypeScale) {
        if (this._overline === value) {
            return;
        }
        this._overline = value;
    }

    public get overline(): ITypeScale {
        if (!this._overline) {
            this._overline = new TypeScale(this.secondary, 400, 10, 1.5);
        }
        return this._overline;
    }
}
