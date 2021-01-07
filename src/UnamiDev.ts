import SizeElement from './core/SizeElement';
import IUnamiDev from './IUnamiDev';

export default class UnamiDev extends SizeElement implements IUnamiDev {
    public constructor() {
        super();
        this.name = 'UnamiDev';
        this.size(200, 200);
    }
}
customElements.define('unami-dev', UnamiDev);
