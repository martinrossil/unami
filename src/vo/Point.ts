import IPoint from '../interfaces/vo/IPoint';

export default class Point implements IPoint {
    public constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    private _x = 0;

    public set x(value: number) {
        if (this._x === value) {
            return;
        }
        if (isNaN(value)) {
            this._x = 0;
            return;
        }
        this._x = value;
    }

    public get x(): number {
        return this._x;
    }

    private _y = 0;

    public set y(value: number) {
        if (this._y === value) {
            return;
        }
        if (isNaN(value)) {
            this._y = 0;
            return;
        }
        this._y = value;
    }

    public get y(): number {
        return this._y;
    }
}
