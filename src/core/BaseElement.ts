import IBaseElement from '../interfaces/core/IBaseElement';

export default class BaseElement extends HTMLElement implements IBaseElement {
    public constructor() {
        super();
        this.name = 'BaseElement';
        this.invalidate = this.invalidate.bind(this);
    }

    public dispatch<Item>(typeArg: string, payload: Item | null = null, bubbles = false): void {
        this.dispatchEvent(new CustomEvent<Item | null>(typeArg, { detail: payload, bubbles: bubbles }));
    }

    public connected = false;

    public name = '';

    private connectedCallback(): void {
        this.connected = true;
        this.validate();
    }

    private disconnectedCallback(): void {
        this.connected = false;
    }

    protected invalidate(): void {
        if (this.connected) {
            this.validate();
        }
    }

    protected validate(): void {
        // override
    }
}
customElements.define('base-element', BaseElement);
