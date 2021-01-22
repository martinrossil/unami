import DisplayElement from '../core/DisplayElement';
import IBaseText from '../interfaces/text/IBaseText';
import ITypeFace from '../interfaces/vo/ITypeFace';
import TypeFace from '../vo/TypeFace';
import TextRenderer from './TextRenderer';

export default class BaseText extends DisplayElement implements IBaseText {
    public constructor() {
        super();
        this.name = 'BaseText';
        this.typeFaceChanged = this.typeFaceChanged.bind(this);
        this.appendChild(this.textRenderer as unknown as Node);
    }

    private _textRenderer!: TextRenderer;

    protected get textRenderer(): TextRenderer {
        if (!this._textRenderer) {
            this._textRenderer = new TextRenderer();
        }
        return this._textRenderer;
    }

    public set text(value: string) {
        this.textRenderer.text = value;
        this.invalidate();
    }

    public get text(): string {
        return this.textRenderer.text;
    }

    private _typeFace!: ITypeFace;

    public set typeFace(value: ITypeFace) {
        if (this._typeFace !== value) {
            if (this._typeFace) {
                this._typeFace.removeEventListener(TypeFace.CHANGED, this.typeFaceChanged);
            }
            this._typeFace = value;
            this._typeFace.addEventListener(TypeFace.CHANGED, this.typeFaceChanged);
            this.typeFaceChanged();
        }
    }

    public get typeFace(): ITypeFace {
        if (!this._typeFace) {
            this._typeFace = new TypeFace();
            this._typeFace.addEventListener(TypeFace.CHANGED, this.typeFaceChanged);
        }
        return this._typeFace;
    }

    private typeFaceChanged(): void {
        this.textRenderer.fontFamily = this.typeFace.fontFamily;
        this.textRenderer.fontWeight = this.typeFace.fontWeight;
        this.invalidate();
    }

    public set fontSize(value: number) {
        this.textRenderer.fontSize = value;
        this.invalidate();
    }

    public get fontSize(): number {
        return this.textRenderer.fontSize;
    }

    public set letterSpacing(value: number) {
        this.textRenderer.letterSpacing = value;
        this.invalidate();
    }

    public get letterSpacing(): number {
        return this.textRenderer.letterSpacing;
    }

    protected get actualFontSize(): number {
        return Math.ceil(this.fontSize * this.typeFace.capHeight);
    }
}
customElements.define('base-text', BaseText);
