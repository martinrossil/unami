import ApplicationElement from './core/ApplicationElement';
import ITypeScale from './interfaces/design/ITypeScale';
import ILabelElement from './interfaces/text/ILabelElement';
import IUnamiDev from './IUnamiDev';
import VerticalLayout from './layout/VerticalLayout';
import LabelElement from './text/LabelElement';
import TypeFace from './vo/TypeFace';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        this.name = 'UnamiDev';
        // this.theme.typography.primary = new TypeFace('Bitter', 0.71, 0.03, 0.02);
        this.theme.typography.primary = new TypeFace('Inter', 0.727, 0.09, 0.0);
        this.theme.typography.secondary = new TypeFace('Inter', 0.727, 0.09, 0.0);
        this.layout = new VerticalLayout(24, 'left', 'top');
        this.padding = 24;
        window.addEventListener('load', () => {
            const l: Array<ILabelElement> = [];
            l.push(this.getLabel(this.theme.typography.headline1));
            l.push(this.getLabel(this.theme.typography.headline2));
            l.push(this.getLabel(this.theme.typography.headline3));
            l.push(this.getLabel(this.theme.typography.headline4));
            l.push(this.getLabel(this.theme.typography.headline5));
            l.push(this.getLabel(this.theme.typography.headline6));
            l.push(this.getLabel(this.theme.typography.subtitle1));
            l.push(this.getLabel(this.theme.typography.subtitle2));
            l.push(this.getLabel(this.theme.typography.body1));
            l.push(this.getLabel(this.theme.typography.body2));
            l.push(this.getLabel(this.theme.typography.button));
            l.push(this.getLabel(this.theme.typography.caption));
            l.push(this.getLabel(this.theme.typography.overline));
            this.addElements(l);
        });
        window.addEventListener('click', () => {
            //
        });
    }

    protected themeChanged(): void {
        console.log(this.name, 'themChanged', this.theme);
    }

    private getLabel(typeScale: ITypeScale): ILabelElement {
        const l: ILabelElement = new LabelElement();
        l.typeScale = typeScale;
        l.text = typeScale.toString();
        return l;
    }
}
customElements.define('unami-dev', UnamiDev);
