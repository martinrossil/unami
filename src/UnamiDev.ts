import Badge from './components/Badge';
import Button from './components/Button';
import Modal from './components/Modal';
import ApplicationElement from './core/ApplicationElement';
import IBadge from './interfaces/components/IBadge';
import IButton from './interfaces/components/IButton';
import ILabelElement from './interfaces/text/ILabelElement';
import IUnamiDev from './IUnamiDev';
import VerticalLayout from './layout/VerticalLayout';
import LabelElement from './text/LabelElement';
import TypeFace from './vo/TypeFace';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        this.name = 'UnamiDev';
        this.backgroundColor = this.colors.neutral.c100;
        this.theme.typography.primary = new TypeFace('Bitter', 0.71, 0.03, 0.02);
        this.theme.typography.secondary = new TypeFace('Inter', 0.727, 0.09, 0.0);
        this.layout = new VerticalLayout(24, 'center', 'middle');
        window.addEventListener('load', () => {
            this.addElement(new Modal());
        });
        window.addEventListener('click', () => {
            //
        });
    }

    private _button!: IButton;

    private get button(): IButton {
        if (!this._button) {
            this._button = new Button();
        }
        return this._button;
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.text = 'Lorem Ipsum';
            this._labelElement.fontSize = 56;
            this._labelElement.typeFace = this.theme.typography.primary;
        }
        return this._labelElement;
    }

    private _badge!: IBadge;

    private get badge(): IBadge {
        if (!this._badge) {
            this._badge = new Badge();
            this._badge.text = 'DEFAULT';
        }
        return this._badge;
    }
}
customElements.define('unami-dev', UnamiDev);
