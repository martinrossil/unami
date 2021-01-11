import IBaseElement from '../interfaces/core/IBaseElement';

export default class BaseElement extends HTMLElement implements IBaseElement {
    public constructor() {
        super();
        this.name = 'BaseElement';
    }

    public dispatch<Item>(typeArg: string, payload: Item | null = null, bubbles = false): void {
        this.dispatchEvent(new CustomEvent<Item | null>(typeArg, { detail: payload, bubbles: bubbles }));
    }

    public connected = false;

    public name = '';

    private connectedCallback(): void {
        this.connected = true;
        this.invalidate();
    }

    private disconnectedCallback(): void {
        this.connected = false;
    }

    protected invalidate(): void {
        console.log(this.name, 'invalidate()');
    }
}
customElements.define('base-element', BaseElement);
