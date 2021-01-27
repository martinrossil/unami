import DisplayContainer from '../core/DisplayContainer';
import IButton from '../interfaces/components/IButton';
import ILabelElement from '../interfaces/text/ILabelElement';
import IColor from '../interfaces/vo/IColor';
import ITypeFace from '../interfaces/vo/ITypeFace';
import LabelElement from '../text/LabelElement';

export default class Button extends DisplayContainer implements IButton {
    public constructor() {
        super();
        this.name = 'Button';
        this.paddingLeft = this.paddingRight = 16;
        this.paddingTop = this.paddingBottom = 10.5;
        this.cornerSize = 4;
        this.addElement(this.labelElement);
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.fontSize = 14;
        }
        return this._labelElement;
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

    public set label(value: string) {
        this.labelElement.text = value;
    }

    public get label(): string {
        return this.labelElement.text;
    }
}
customElements.define('button-element', Button);
