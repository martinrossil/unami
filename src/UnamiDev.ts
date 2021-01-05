export default class UnamiDev extends HTMLElement {
    public constructor() {
        super();
        console.log('UnamiDev constructor()');
    }
}
customElements.define('unami-dev', UnamiDev);
