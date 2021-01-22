import ApplicationElement from './core/ApplicationElement';
import ILabelElement from './interfaces/text/ILabelElement';
import IUnamiDev from './IUnamiDev';
import VerticalLayout from './layout/VerticalLayout';
import LabelElement from './text/LabelElement';
import TypeFace from './vo/TypeFace';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        console.time('app');
        this.name = 'UnamiDev';
        this.padding = 32;
        this.layout = new VerticalLayout(32, 'center', 'middle');
        this.addElement(this.labelElement);
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.text = 'HxÅjH';
            this._labelElement.fontSize = 100;
            this._labelElement.percentWidth = 80;
            this._labelElement.typeFace = new TypeFace('Inter', 700, 0.727, 0.07, 0.0);
        }
        return this._labelElement;
    }
}
customElements.define('unami-dev', UnamiDev);
