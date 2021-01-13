import ISize from '../interfaces/vo/ISize';

export default class Size implements ISize {
    public constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;
    }

    private _width = 0;

    public set width(value: number) {
        if (isNaN(value)) {
            return;
        }
        if (value < 0) {
            if (this._width !== 0) {
                this._width = 0;
                return;
            }
        }
        this._width = value;
    }

    public get width(): number {
        return this._width;
    }

    private _height = 0;

    public set height(value: number) {
        if (isNaN(value)) {
            return;
        }
        if (value < 0) {
            if (this._height !== 0) {
                this._height = 0;
                return;
            }
        }
        this._height = value;
    }

    public get height(): number {
        return this._height;
    }
}
