import ApplicationElement from './core/ApplicationElement';
import IUnamiDev from './IUnamiDev';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        this.name = 'UnamiDev';
    }
}
customElements.define('unami-dev', UnamiDev);
