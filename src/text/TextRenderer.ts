import DisplayElement from '../core/DisplayElement';
import { Strings } from '../enums/Strings';
import ITextRenderer from '../interfaces/text/ITextRenderer';
import Color from '../vo/Color';

export default class TextRenderer extends DisplayElement implements ITextRenderer {
    public constructor() {
        super();
        this.name = 'TextRenderer';
        this.backgroundColor = new Color(212, 100, 50, 0.2);
        this.style.fontFamily = 'Arial';
        this.style.fontSize = '16px';
        this.style.lineHeight = '2';
        this.style.color = 'hsla(0, 0%, 0%, 0.3)';
    }

    private _text = '';

    public set text(value: string) {
        if (this._text === value) {
            return;
        }
        this._text = value;
        this.innerText = value;
    }

    public get text(): string {
        return this._text;
    }

    private _fontFamily = 'Arial';

    public set fontFamily(value: string) {
        if (this._fontFamily === value) {
            return;
        }
        this._fontFamily = value;
        this.style.fontFamily = this._fontFamily;
    }

    public get fontFamily(): string {
        return this._fontFamily;
    }

    private _fontSize = 16;

    public set fontSize(value: number) {
        if (this._fontSize === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._fontSize !== 16) {
                this._fontSize = 16;
                this.style.fontSize = this._fontSize + Strings.PX;
            }
            return;
        }
        this._fontSize = value;
        this.style.fontSize = this._fontSize + Strings.PX;
    }

    public get fontSize(): number {
        return this._fontSize;
    }

    private _fontWeight = 400;

    public set fontWeight(value: number) {
        if (this._fontWeight === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._fontWeight !== 400) {
                this._fontWeight = 400;
                this.style.fontWeight = this._fontWeight.toString();
            }
            return;
        }
        this._fontWeight = value;
        this.style.fontWeight = this._fontWeight.toString();
    }

    public get fontWeight(): number {
        return this._fontWeight;
    }

    private _letterSpacing = 0.0;

    public set letterSpacing(value: number) {
        if (this._letterSpacing === value) {
            return;
        }
        if (isNaN(value)) {
            this._letterSpacing = 0;
        } else {
            this._letterSpacing = value;
        }
        this.style.letterSpacing = this._letterSpacing.toString();
    }

    public get letterSpacing(): number {
        return this._letterSpacing;
    }
}
customElements.define('text-renderer', TextRenderer);
