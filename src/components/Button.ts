import DisplayContainer from '../core/DisplayContainer';
import IButton from '../interfaces/components/IButton';
import ILabelElement from '../interfaces/text/ILabelElement';
import IColor from '../interfaces/vo/IColor';
import ITypeFace from '../interfaces/vo/ITypeFace';
import LabelElement from '../text/LabelElement';
import { FontWeight } from '../types/FontWeight';

export default class Button extends DisplayContainer implements IButton {
    public constructor() {
        super();
        this.name = 'Button';
        this.typeFace = this.typography.secondary;
        this.backgroundColor = this.colors.secondary.c500;
        this.textColor = this.colors.secondary.c100;
        this.paddingLeft = this.paddingRight = 16;
        this.paddingTop = this.paddingBottom = 10.5;
        this.cornerSize = 4;
        this.label = 'Button';
        this.addElement(this.labelElement);
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.fontSize = 14;
            this._labelElement.fontWeight = 500;
        }
        return this._labelElement;
    }

    public set letterSpacing(value: number) {
        this.labelElement.letterSpacing = value;
    }

    public get letterSpacing(): number {
        return this.labelElement.letterSpacing;
    }

    public set fontSize(value: number) {
        this.labelElement.fontSize = value;
    }

    public get fontSize(): number {
        return this.labelElement.fontSize;
    }

    public set fontWeight(value: FontWeight) {
        this.labelElement.fontWeight = value;
    }

    public get fontWeight(): FontWeight {
        return this.labelElement.fontWeight;
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
