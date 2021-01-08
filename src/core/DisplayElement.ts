import SizeElement from './SizeElement';
import IDisplayElement from '../interfaces/core/IDisplayElement';
import IColor from '../interfaces/vo/IColor';

export default class DisplayElement extends SizeElement implements IDisplayElement {
    public constructor() {
        super();
        this.name = 'DisplayElement';
        this.style.border = 'none';
        this.style.outline = 'none';
    }

    private _backgroundColor: IColor | null = null;

    public set backgroundColor(value: IColor | null) {
        if (this._backgroundColor === value) {
            return;
        }
        this._backgroundColor = value;
        if (this._backgroundColor) {
            this.style.backgroundColor = this._backgroundColor.toString();
        } else {
            this.style.backgroundColor = '';
        }
    }

    public get backgroundColor(): IColor | null {
        return this._backgroundColor;
    }
}
customElements.define('display-element', DisplayElement);
