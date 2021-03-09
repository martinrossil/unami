import ApplicationElement from './core/ApplicationElement';
import DisplayElement from './core/DisplayElement';
import BoxShadowFilter from './filters/BoxShadowFilter';
import IDisplayElement from './interfaces/core/IDisplayElement';
import IUnamiDev from './IUnamiDev';
import Color from './vo/Color';
import TypeFace from './vo/TypeFace';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        this.name = 'UnamiDev';
        this.backgroundColor = this.colors.neutral.c100;
        this.theme.typography.primary = new TypeFace('Eurostile Extended', 0.68, 0.09, 0.025);
        this.theme.typography.secondary = new TypeFace('Inter', 0.727, 0.09, 0.0);
        window.addEventListener('load', () => {
            this.addElement(this.box);
        });
    }

    private _box!: IDisplayElement;

    private get box(): IDisplayElement {
        if (!this._box) {
            this._box = new DisplayElement();
            this._box.size(200, 200);
            this._box.backgroundColor = this.colors.primary.c500;
            this._box.addFilter(new BoxShadowFilter(0, 4, 6, -1, new Color(0, 0, 0, 0.1)));
            this._box.addFilter(new BoxShadowFilter(0, 2, 4, -1, new Color(0, 0, 0, 0.06)));
            this._box.cornerSize = 16;
        }
        return this._box;
    }
}
customElements.define('unami-dev', UnamiDev);
