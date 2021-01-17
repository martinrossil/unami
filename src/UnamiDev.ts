import ApplicationElement from './core/ApplicationElement';
import DisplayContainer from './core/DisplayContainer';
import DisplayElement from './core/DisplayElement';
import BoxShadowFilter from './filters/BoxShadowFilter';
import ShadowFilter from './filters/ShadowFilter';
import IDisplayContainer from './interfaces/core/IDisplayContainer';
import IDisplayElement from './interfaces/core/IDisplayElement';
import IShadowFilter from './interfaces/filters/IShadowFilter';
import IPathElement from './interfaces/svg/IPathElement';
import IUnamiDev from './IUnamiDev';
import VerticalLayout from './layout/VerticalLayout';
import PathElement from './svg/PathElement';
import Color from './vo/Color';
import LinearGradient from './vo/LinearGradient';
import Rectangle from './vo/Rectangle';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        console.time('app');
        this.name = 'UnamiDev';
        this.layout = new VerticalLayout(0, 'center', 'middle');
        this.loadComplete = this.loadComplete.bind(this);
        this.backgroundColor = new Color(225, 100, 94);
        // this.backgroundColor = new LinearGradient(135, [new Color(46, 125, 50), new Color(0, 100, 50)]);
        window.addEventListener('load', this.loadComplete);
        window.addEventListener('click', () => {
            // this.white.cornerSize += 8;
            // this.white.visible = !this.white.visible;
            this.sf.color.hue += 15;
        });
    }

    private sf: IShadowFilter = new ShadowFilter(8, 8, 4, new Color(0, 100, 50, 0.8))

    private loadComplete(): void {
        window.removeEventListener('load', this.loadComplete);
        console.log('loadComplete');
        console.timeEnd('app');
        console.log('before [' + this.white.style.filter + ']');
        // this.addElement(this.blue);
        this.addElement(this.dc);
        console.log('after [' + this.white.style.filter + ']');
        /* if (this.white.style.filter === '') {
            this.white.style.boxShadow = '4px 4px 4px hsla(0, 0%, 0%, 1.0)';
        } */
    }

    private _blue!: IDisplayElement;

    private get blue(): IDisplayElement {
        if (!this._blue) {
            this._blue = new DisplayElement();
            this._blue.percentWidth = 100;
            this._blue.percentHeight = 50;
            this._blue.backgroundColor = new Color(202, 100, 50);
        }
        return this._blue;
    }

    private _dc!: IDisplayContainer;

    private get dc(): IDisplayContainer {
        if (!this._dc) {
            this._dc = new DisplayContainer();
            this._dc.percentWidth = 60;
            this._dc.percentHeight = 60;
            this._dc.addFilter(new BoxShadowFilter(0, 4, 6, -1, new Color(0, 0, 0, 0.2), true));
            this._dc.addFilter(new BoxShadowFilter(0, 2, 4, -1, new Color(0, 0, 0, 0.15), true));
            this._dc.backgroundColor = new Color(202, 100, 100);
            this._dc.cornerSize = 32;
            this._dc.addElement(this.pathElement);
        }
        return this._dc;
    }

    private _pathElement!: IPathElement;

    private get pathElement(): IPathElement {
        if (!this._pathElement) {
            this._pathElement = new PathElement();
            this._pathElement.viewBox = new Rectangle(0, 0, 24, 24);
            this._pathElement.percentWidth = 100;
            this._pathElement.percentHeight = 100;
            // this._pathElement.strokeColor = new Color(212, 100, 50);
            this._pathElement.fillColor = new LinearGradient(45, [new Color(0, 100, 50), new Color(46, 100, 50)]);
            this._pathElement.addFilter(new ShadowFilter());
            // this._pathElement.strokeColor = new LinearGradient(45, [new Color(0, 100, 50), new Color(46, 100, 50)]);
            // this._pathElement.addFilter(new BlurFilter(3));
            // this._pathElement.addFilter(new BlurFilter(2));
            this._pathElement.pathData = 'M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z';
        }
        return this._pathElement;
    }

    private _white!: DisplayElement;

    private get white(): DisplayElement {
        if (!this._white) {
            this._white = new DisplayElement();
            this._white.name = 'white';
            // this._white.size(250, 250);
            this._white.percentWidth = 30;
            this._white.percentHeight = 30;
            this._white.cornerSize = 32; // backdrop-filter: blur(10px);
            // this._white.style.setProperty('-webkit-backdrop-filter', 'blur(10px)');
            this._white.style.setProperty('backdrop-filter', 'blur(10px)');
            // this._white.style.filter = 'drop-shadow(4px 4px 4px hsla(0, 0%, 0%, 1.0))';
            this._white.backgroundColor = new Color(202, 100, 100);
            // this._white.style.border = 'solid hsla(0, 0%, 100%, 0.4) 2px';
            // this.white.addFilter(new BoxShadowFilter());
            this._white.addFilter(new BoxShadowFilter(0, 4, 6, -1, new Color(0, 0, 0, 0.1)));
            this._white.addFilter(new BoxShadowFilter(0, 2, 4, -1, new Color(0, 0, 0, 0.05)));
            // md 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            // lg 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        return this._white;
    }
}
customElements.define('unami-dev', UnamiDev);
