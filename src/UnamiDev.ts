import ApplicationElement from './core/ApplicationElement';
import IUnamiDev from './IUnamiDev';
import VerticalLayout from './layout/VerticalLayout';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        console.time('app');
        this.name = 'UnamiDev';
        this.padding = 32;
        this.layout = new VerticalLayout(32, 'center', 'middle');
    }
}
customElements.define('unami-dev', UnamiDev);
