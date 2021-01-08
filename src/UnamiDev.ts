import DisplayContainer from './core/DisplayContainer';
import IUnamiDev from './IUnamiDev';
import Color from './vo/Color';

export default class UnamiDev extends DisplayContainer implements IUnamiDev {
    public constructor() {
        super();
        this.name = 'UnamiDev';
        // hsla(210, 40%, 98%, 1)
        this.size(200, 200);
        this.backgroundColor = new Color(210, 100, 50);
    }
}
customElements.define('unami-dev', UnamiDev);
