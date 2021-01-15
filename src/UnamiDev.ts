import ApplicationElement from './core/ApplicationElement';
import DisplayContainer from './core/DisplayContainer';
import DisplayElement from './core/DisplayElement';
import IDisplayContainer from './interfaces/core/IDisplayContainer';
import IDisplayElement from './interfaces/core/IDisplayElement';
import IUnamiDev from './IUnamiDev';
import VerticalLayout from './layout/VerticalLayout';
import Color from './vo/Color';
import LinearGradient from './vo/LinearGradient';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        console.time('app');
        this.name = 'UnamiDev';
        this.loadComplete = this.loadComplete.bind(this);
        this.backgroundColor = new LinearGradient(135, [new Color(46, 125, 50), new Color(0, 100, 50)]);
        window.addEventListener('load', this.loadComplete);
        window.addEventListener('click', () => {
            this.white.cornerSize += 8;
        });
    }

    private loadComplete(): void {
        window.removeEventListener('load', this.loadComplete);
        console.log('loadComplete');
        console.timeEnd('app');
        console.log('before [' + this.white.style.filter + ']');
        this.addElement(this.blue);
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
            this._dc.percentWidth = 100;
            this._dc.percentHeight = 100;
            this._dc.layout = new VerticalLayout(0, 'center', 'middle');
            this._dc.addElement(this.white);
        }
        return this._dc;
    }

    private _white!: DisplayElement;

    private get white(): DisplayElement {
        if (!this._white) {
            this._white = new DisplayElement();
            this._white.name = 'white';
            this._white.size(250, 250);
            this._white.cornerSize = 32; // backdrop-filter: blur(10px);
            // this._white.style.setProperty('-webkit-backdrop-filter', 'blur(10px)');
            this._white.style.setProperty('backdrop-filter', 'blur(10px)');
            // this._white.style.filter = 'drop-shadow(4px 4px 4px hsla(0, 0%, 0%, 1.0))';
            this._white.backgroundColor = new Color(0, 0, 100, 0.2);
            this._white.style.border = 'solid hsla(0, 0%, 100%, 0.4) 2px';
        }
        return this._white;
    }
}
customElements.define('unami-dev', UnamiDev);
