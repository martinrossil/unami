import DisplayContainer from '../core/DisplayContainer';
import IBadge from '../interfaces/components/IBadge';
import ILabelElement from '../interfaces/text/ILabelElement';
import IColor from '../interfaces/vo/IColor';
import ITypeFace from '../interfaces/vo/ITypeFace';
import LabelElement from '../text/LabelElement';
import { FontWeight } from '../types/FontWeight';

export default class Badge extends DisplayContainer implements IBadge {
    public constructor() {
        super();
        this.name = 'BadgeElement';
        this.typeFace = this.typography.secondary;
        this.backgroundColor = this.colors.success.c200;
        this.textColor = this.theme.colors.success.c700;
        this.fontSize = 10;
        this.fontWeight = 700;
        this.paddingX = 8;
        this.paddingY = 4;
        this.cornerSize = 8;
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

    public set fontWeight(value: FontWeight) {
        this.labelElement.fontWeight = value;
    }

    public get fontWeight(): FontWeight {
        return this.labelElement.fontWeight;
    }

    public set fontSize(value: number) {
        this.labelElement.fontSize = value;
    }

    public get fontSize(): number {
        return this.labelElement.fontSize;
    }

    public set typeFace(value: ITypeFace) {
        this.labelElement.typeFace = value;
    }

    public get typeFace(): ITypeFace {
        return this.labelElement.typeFace;
    }
}
customElements.define('badge-element', Badge);
