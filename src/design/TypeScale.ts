import ITypeScale from '../interfaces/design/ITypeScale';
import ITypeFace from '../interfaces/vo/ITypeFace';
import { FontWeight } from '../types/FontWeight';
import TypeFace from '../vo/TypeFace';

export default class TypeScale implements ITypeScale {
    public constructor(typeFace: ITypeFace, fontWeight: FontWeight, fontSize: number, letterSpacing: number) {
        this.typeFace = typeFace;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
        this.letterSpacing = letterSpacing;
    }

    private _typeFace!: ITypeFace;

    public set typeFace(value: ITypeFace) {
        if (this._typeFace === value) {
            return;
        }
        this._typeFace = value;
    }

    public get typeFace(): ITypeFace {
        if (!this._typeFace) {
            this._typeFace = new TypeFace('Arial', 0.715, 0.11, 0.015);
        }
        return this._typeFace;
    }

    private _fontWeight: FontWeight = 400;

    public set fontWeight(value: FontWeight) {
        if (this._fontWeight === value) {
            return;
        }
        this._fontWeight = value;
    }

    public get fontWeight(): FontWeight {
        return this._fontWeight;
    }

    private _fontSize = 16;

    public set fontSize(value: number) {
        if (this._fontSize === value) {
            return;
        }
        if (isNaN(value)) {
            if (this._fontSize !== 16) {
                this._fontSize = 16;
            }
            return;
        }
        this._fontSize = value;
    }

    public get fontSize(): number {
        return this._fontSize;
    }

    private _letterSpacing = 0;

    public set letterSpacing(value: number) {
        if (this._letterSpacing === value) {
            return;
        }
        if (isNaN(value)) {
            if (this._letterSpacing !== 0) {
                this._letterSpacing = 0;
            }
            return;
        }
        this._letterSpacing = value;
    }

    public get letterSpacing(): number {
        return this._letterSpacing;
    }

    public toString(): string {
        return this.typeFace.fontFamily + ' ' + this.fontSize + 'px ' + this.fontWeight + ' ' + this.letterSpacing + 'px';
    }
}
