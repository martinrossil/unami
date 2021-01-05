import IUnamiDev from './IUnamiDev';

export default class UnamiDev extends HTMLElement implements IUnamiDev {
    public constructor() {
        super();
        console.log('UnamiDev constructor()');
    }

    public name = '';
}
customElements.define('unami-dev', UnamiDev);
