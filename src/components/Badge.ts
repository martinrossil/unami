import DisplayContainer from '../core/DisplayContainer';
import IBadge from '../interfaces/components/IBadge';
import ILabelElement from '../interfaces/text/ILabelElement';
import IColor from '../interfaces/vo/IColor';
import LabelElement from '../text/LabelElement';
import { ColorType } from '../types/ColorType';

export default class Badge extends DisplayContainer implements IBadge {
    public constructor() {
        super();
        this.name = 'BadgeElement';
        this.backgroundColor = this.getBackgroundColorFromType();
        this.paddingLeft = this.paddingRight = 8; // Spacing next
        this.paddingTop = this.paddingBottom = 4;
        this.cornerSize = 8; // Then corners
        this.addElement(this.labelElement);
        this.notifyThemeChange = true;
    }

    protected themeChanged(): void {
        console.log(this.name, 'themeChanged()');
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.textColor = this.getTextColorFromType();
            // this._labelElement.typeFace = this.theme.typography.ui.bold700;
            // this._labelElement.fontSize = this.theme.typography.fontSize.smallest;
        }
        return this._labelElement;
    }

    public set text(value: string) {
        this.labelElement.text = value;
    }

    public get text(): string {
        return this.labelElement.text;
    }

    private _color: ColorType = 'primary';

    public set color(value: ColorType) {
        if (this._color === value) {
            return;
        }
        this._color = value;
        this.backgroundColor = this.getBackgroundColorFromType();
        this.labelElement.textColor = this.getTextColorFromType();
    }

    public get color(): ColorType {
        return this._color;
    }

    private getBackgroundColorFromType(): IColor {
        if (this.color === 'primary') {
            return this.theme.colors.primary.c200;
        }
        if (this.color === 'success') {
            return this.theme.colors.success.c200;
        }
        if (this.color === 'danger') {
            return this.theme.colors.danger.c200;
        }
        return this.theme.colors.primary.c500;
    }

    private getTextColorFromType(): IColor {
        if (this.color === 'primary') {
            return this.theme.colors.primary.c700;
        }
        if (this.color === 'success') {
            return this.theme.colors.success.c700;
        }
        if (this.color === 'danger') {
            return this.theme.colors.danger.c700;
        }
        return this.theme.colors.primary.c500;
    }
}
customElements.define('badge-element', Badge);
