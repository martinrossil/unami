import IPositionElement from '../interfaces/core/IPositionElement';
import BaseElement from './BaseElement';

export default class PositionElement extends BaseElement implements IPositionElement {
    public constructor() {
        super();
        this.name = 'PositionElement';
    }

    public move(x: number, y: number): void {
        console.log(this.name, 'move(' + x + ', ' + y + ')');
    }

    private _x = 0;

    public set x(value: number) {
        console.log(this.name, 'set x =', value);
    }

    public get x(): number {
        return this._x;
    }

    private _y = 0;

    public set y(value: number) {
        console.log(this.name, 'set y =', value);
    }

    public get y(): number {
        return this._y;
    }
}
customElements.define('position-element', PositionElement);
