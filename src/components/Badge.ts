import DisplayContainer from '../core/DisplayContainer';
import IBadge from '../interfaces/components/IBadge';
import ILabelElement from '../interfaces/text/ILabelElement';
import IColor from '../interfaces/vo/IColor';
import ITypeFace from '../interfaces/vo/ITypeFace';
import LabelElement from '../text/LabelElement';

export default class Badge extends DisplayContainer implements IBadge {
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

    public set text(value: string) {
        this.labelElement.text = value;
    }

    public get text(): string {
        return this.labelElement.text;
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
customElements.define('badge-element', Badge);
