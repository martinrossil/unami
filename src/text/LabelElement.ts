import ILabelElement from '../interfaces/text/ILabelElement';
import Color from '../vo/Color';
import BaseText from './BaseText';

export default class LabelElement extends BaseText implements ILabelElement {
    public constructor() {
        super();
        this.name = 'LabelElement';
        this.backgroundColor = new Color(0, 100, 50, 0.2);
        this.textRenderer.style.whiteSpace = 'nowrap';
        this.textRenderer.style.textOverflow = 'ellipsis';
        this.textRenderer.style.overflow = 'hidden';
    }

    protected validate(): void {
        super.validate();
        this.invalidateInternalSize();
        this.updateTextRendererWidth();
        this.updateTextRendererPosition();
    }

    protected updateInternalSize(): void {
        this.resetTextRendererStyles();
        this.internalSize(this.actualRendererWidth, this.actualFontSize);
    }

    protected updateInternalWidth(): void {
        this.resetTextRendererStyles();
        this.internalWidth = this.actualRendererWidth;
    }

    protected updateInternalHeight(): void {
        this.resetTextRendererStyles();
        this.internalHeight = this.actualFontSize;
    }

    private resetTextRendererStyles(): void {
        this.textRenderer.style.width = '';
        this.textRenderer.style.height = '';
    }

    protected updateTextRendererWidth(): void {
        this.textRenderer.width = NaN;
        this.textRenderer.width = this.measuredWidth;
    }

    protected updateTextRendererPosition(): void {
        this.textRenderer.x = -this.typeFace.offsetX * this.fontSize;
        this.textRenderer.y = -this.topPadding + this.typeFace.offsetY * this.fontSize;
    }

    private get topPadding(): number {
        return (this.fontSize * 2 - this.actualFontSize) * 0.5;
    }

    private get actualRendererWidth(): number {
        return Math.ceil(this.textRenderer.clientWidth - this.typeFace.offsetX * 2 * this.fontSize - this.letterSpacing);
    }
}
customElements.define('label-element', LabelElement);
