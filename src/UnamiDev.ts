import ApplicationElement from './core/ApplicationElement';
import DisplayContainer from './core/DisplayContainer';
import DisplayElement from './core/DisplayElement';
import IDisplayContainer from './interfaces/core/IDisplayContainer';
import IDisplayElement from './interfaces/core/IDisplayElement';
import IUnamiDev from './IUnamiDev';
import HorizontalLayout from './layout/HorizontalLayout';
import Color from './vo/Color';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        console.time('app');
        this.name = 'UnamiDev';
        this.loadComplete = this.loadComplete.bind(this);
        // this.layout = new VerticalLayout();
        window.addEventListener('load', this.loadComplete);
        // hsla(210, 40%, 98%, 1)
        this.backgroundColor = new Color(210, 100, 98);
        // this.addElement(this.dc);
        window.addEventListener('click', () => {
            console.time('padding');
            this.dc.padding += 5;
            // this.black.percentWidth += 5;
            // this.black.percentHeight += 5;
            // console.log('click', this.black.percentWidth);
            console.timeEnd('padding')
        });
    }

    private loadComplete(): void {
        window.removeEventListener('load', this.loadComplete);
        console.log('loadComplete');
        console.timeEnd('app');
        console.time('app');
        this.addElement(this.dc);
        console.timeEnd('app');
    }

    private _dc!: IDisplayContainer;

    private get dc(): IDisplayContainer {
        if (!this._dc) {
            this._dc = new DisplayContainer();
            // this._dc.height = 300;
            // this._dc.width = 300;
            this._dc.percentWidth = 95;
            this._dc.percentHeight = 95;
            this._dc.name = 'red container';
            this._dc.layout = new HorizontalLayout(10, 'center', 'fill');
            this._dc.backgroundColor = new Color(0, 100, 50, 0.5);
            this._dc.padding = 10;
            // this._dc.addElement(this.blue);
            // this._dc.addElement(this.orange);
            this._dc.addElements([this.blue, this.orange, this.black]);
        }
        return this._dc;
    }

    private _blue!: IDisplayElement;

    private get blue(): IDisplayElement {
        if (!this._blue) {
            this._blue = new DisplayElement();
            this._blue.name = 'blue';
            // this._blue.height = 50;
            // this._blue.percentWidth = 100;
            // this._blue.maxWidth = 150;
            this._blue.size(150, 150);
            this._blue.backgroundColor = new Color(210, 100, 50, 0.5);
        }
        return this._blue;
    }

    private _orange!: IDisplayElement;

    private get orange(): IDisplayElement {
        if (!this._orange) {
            this._orange = new DisplayElement();
            this._orange.name = 'orange';
            // this._orange.size(100, 100);
            this._orange.height = 150;
            this._orange.percentWidth = 100;
            // this._orange.percentWidth = 100;
            this._orange.backgroundColor = new Color(29, 100, 50, 0.5);
        }
        return this._orange;
    }

    private _black!: IDisplayElement;

    private get black(): IDisplayElement {
        if (!this._black) {
            this._black = new DisplayElement();
            this._black.name = 'black';
            // this._black.minWidth = 100;
            // this._black.percentWidth = 50;
            // this._black.percentHeight = 50;
            this._black.size(100, 100);
            this._black.backgroundColor = new Color(0, 0, 0, 0.5);
        }
        return this._black;
    }
}
customElements.define('unami-dev', UnamiDev);
