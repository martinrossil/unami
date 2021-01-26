import DisplayContainer from '../core/DisplayContainer';
import IBadgeElement from '../interfaces/components/IBadgeElement';
import ILabelElement from '../interfaces/text/ILabelElement';
import IColor from '../interfaces/vo/IColor';
import ITypeFace from '../interfaces/vo/ITypeFace';
import LabelElement from '../text/LabelElement';

export default class BadgeElement extends DisplayContainer implements IBadgeElement {
    public constructor() {
        super();
        this.name = 'BadgeElement';
        this.labelElement.fontSize = 11;
        this.paddingLeft = this.paddingRight = 9;
        this.paddingTop = this.paddingBottom = 5;
        this.cornerSize = 9;
        this.addElement(this.labelElement);
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
        }
        return this._labelElement;
    }

    private _text = '';

    public set text(value: string) {
        if (this._text === value) {
            return;
        }
        this._text = value;
        this.labelElement.text = this._text;
    }

    public get text(): string {
        return this._text;
    }

    public set textColor(value: IColor | null) {
        this.labelElement.textColor = value;
    }

    public get textColor(): IColor | null {
        return this.labelElement.textColor;
    }

    public set typeFace(value: ITypeFace) {
        this.labelElement.typeFace = value;
    }

    public get typeFace(): ITypeFace {
        return this.labelElement.typeFace;
    }
}
customElements.define('badge-element', BadgeElement);
