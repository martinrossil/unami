import ApplicationElement from './core/ApplicationElement';
import DisplayContainer from './core/DisplayContainer';
import DisplayElement from './core/DisplayElement';
import IDisplayContainer from './interfaces/core/IDisplayContainer';
import IDisplayElement from './interfaces/core/IDisplayElement';
import IUnamiDev from './IUnamiDev';
import Color from './vo/Color';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        console.time('app')
        this.name = 'UnamiDev';
        // hsla(210, 40%, 98%, 1)
        this.backgroundColor = new Color(210, 100, 98);
        // this.addElement(this.dc);
    }

    protected invalidate(): void {
        this.addElement(this.dc);
        // this.dc.padding = 50;
        console.timeEnd('app');
    }

    private _dc!: IDisplayContainer;

    private get dc(): IDisplayContainer {
        if (!this._dc) {
            this._dc = new DisplayContainer();
            // this._dc.width = 500;
            this._dc.name = 'red container';
            this._dc.backgroundColor = new Color(0, 100, 50, 0.5);
            this._dc.padding = 50;
            this._dc.addElement(this.blue);
            this._dc.addElement(this.orange);
            // this._dc.addElements([this.blue, this.orange]);
        }
        return this._dc;
    }

    private _blue!: IDisplayElement;

    private get blue(): IDisplayElement {
        if (!this._blue) {
            this._blue = new DisplayElement();
            this._blue.name = 'blue';
            this._blue.size(300, 50);
            this._blue.backgroundColor = new Color(210, 100, 50, 0.5);
        }
        return this._blue;
    }

    private _orange!: IDisplayElement;

    private get orange(): IDisplayElement {
        if (!this._orange) {
            this._orange = new DisplayElement();
            this._orange.name = 'orange';
            this._orange.size(50, 300);
            this._orange.backgroundColor = new Color(29, 100, 50, 0.5);
        }
        return this._orange;
    }
}
customElements.define('unami-dev', UnamiDev);
