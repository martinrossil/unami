import IBaseElement from '../interfaces/core/IBaseElement';

export default class BaseElement extends HTMLElement implements IBaseElement {
    public constructor() {
        super();
        this.name = 'BaseElement';
    }

    public dispatch<Item>(typeArg: string, payload: Item | null = null): void {
        this.dispatchEvent(new CustomEvent<Item | null>(typeArg, { detail: payload }));
    }

    public connected = false;

    public name = '';

    private connectedCallback(): void {
        this.connected = true;
    }

    private disconnectedCallback(): void {
        this.connected = false;
    }
}
customElements.define('base-element', BaseElement);
