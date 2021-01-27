import Badge from './components/Badge';
import Button from './components/Button';
import ApplicationElement from './core/ApplicationElement';
import IBadge from './interfaces/components/IBadge';
import IButton from './interfaces/components/IButton';
import IUnamiDev from './IUnamiDev';
import VerticalLayout from './layout/VerticalLayout';
import Color from './vo/Color';
import TypeFace from './vo/TypeFace';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        this.name = 'UnamiDev';
        this.layout = new VerticalLayout(32, 'center', 'middle');
        window.addEventListener('load', () => {
            this.addElement(this.button);
            this.addElement(this.badgeElement);
        });
    }

    private _button!: IButton;

    private get button(): IButton {
        if (!this._button) {
            this._button = new Button();
            this._button.backgroundColor = new Color(217, 91, 60); // Blue 500 hsla(217, 91%, 60%, 1)
            this._button.label = 'Button Text'; // Blue Gray 900 hsla(222, 47%, 11%, 1)
            this._button.textColor = new Color(0, 100, 100);
            this._button.typeFace = new TypeFace('Inter', 500, 0.727, 0.09, 0.0);
        }
        return this._button;
    }

    private _badgeElement!: IBadge;

    private get badgeElement(): IBadge {
        if (!this._badgeElement) {
            this._badgeElement = new Badge(); // Green 200 hsla(141, 79%, 85%, 1)
            this._badgeElement.backgroundColor = new Color(141, 79, 85); // Green 100 hsla(141, 84%, 93%, 1)
            this._badgeElement.text = 'Success';
            this._badgeElement.typeFace = new TypeFace('Inter', 700, 0.727, 0.09, 0.0);
            this._badgeElement.textColor = new Color(142, 72, 29); // green 700 hsla(142, 72%, 29%, 1)
        }
        return this._badgeElement;
    }
}
customElements.define('unami-dev', UnamiDev);
