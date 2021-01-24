import ApplicationElement from './core/ApplicationElement';
import ShadowFilter from './filters/ShadowFilter';
import ILabelElement from './interfaces/text/ILabelElement';
import ITextElement from './interfaces/text/ITextElement';
import IUnamiDev from './IUnamiDev';
import VerticalLayout from './layout/VerticalLayout';
import LabelElement from './text/LabelElement';
import TextElement from './text/TextElement';
import Color from './vo/Color';
import TypeFace from './vo/TypeFace';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        console.time('app');
        this.name = 'UnamiDev';
        this.padding = 32;
        this.layout = new VerticalLayout(32, 'center', 'middle');
        this.addElement(this.textElement);
        let p = true;
        window.addEventListener('click', () => {
            if (p) {
                this.textElement.percentWidth = NaN;
            } else {
                this.textElement.percentWidth = 80;
            }
            p = !p;
        });
    }

    private _textElement!: ITextElement;

    private get textElement(): ITextElement {
        if (!this._textElement) {
            this._textElement = new TextElement();
            this._textElement.text = 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
            this._textElement.fontSize = 24;
            this._textElement.percentWidth = 80;
            this._textElement.typeFace = new TypeFace('Inter', 700, 0.727, 0.07, 0.0);
            this._textElement.textColor = new Color(212, 50, 0);
            this._textElement.textAlign = 'justify';
            this._textElement.addFilter(new ShadowFilter(3, 3, 2, new Color(212, 50, 50, 0.8)));
        }
        return this._textElement;
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.text = 'Lorem ipsum cing elit.';
            this._labelElement.fontSize = 64;
            this._labelElement.percentWidth = 80;
            this._labelElement.typeFace = new TypeFace('Inter', 700, 0.727, 0.07, 0.0);
        }
        return this._labelElement;
    }
}
customElements.define('unami-dev', UnamiDev);
