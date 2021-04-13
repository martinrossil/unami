import Design from '../design/Design';
import IBaseElement from '../interfaces/core/IBaseElement';
import IColors from '../interfaces/design/IColors';
import ITheme from '../interfaces/design/ITheme';
import ITypography from '../interfaces/design/ITypography';

export default class BaseElement extends HTMLElement implements IBaseElement {
    public constructor() {
        super();
        this.name = 'BaseElement';
        this.invalidate = this.invalidate.bind(this);
        this.themeChanged = this.themeChanged.bind(this);
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

    private _visible = true;

    public set visible(value: boolean) {
        if (this._visible === value) {
            return;
        }
        this._visible = value;
        if (this._visible) {
            this.style.visibility = '';
            return;
        }
        this.style.visibility = 'hidden';
    }

    public get visible(): boolean {
        return this._visible;
    }

    private _notifyThemeChange = false;

    public set notifyThemeChange(value: boolean) {
        if (this._notifyThemeChange === value) {
            return;
        }
        if (this._notifyThemeChange) {
            Design.dispatcher.removeEventListener(Design.THEME_CHANGED, this.themeChanged);
        }
        this._notifyThemeChange = value;
        if (this._notifyThemeChange) {
            Design.dispatcher.addEventListener(Design.THEME_CHANGED, this.themeChanged);
        }
    }

    public get notifyThemeChange(): boolean {
        return this._notifyThemeChange;
    }

    protected get theme(): ITheme {
        return Design.theme;
    }

    protected get typography(): ITypography {
        return Design.theme.typography;
    }

    protected get colors(): IColors {
        return Design.theme.colors;
    }

    protected themeChanged(): void {
        // override
    }

    private _enabled = true;

    public set enabled(value: boolean) {
        if (this._enabled === value) {
            return;
        }
        this._enabled = value;
        if (value) {
            this.style.pointerEvents = '';
            this.style.userSelect = 'auto';
        } else {
            this.style.pointerEvents = 'none';
            this.style.userSelect = 'none';
        }
    }

    public get enabled(): boolean {
        return this._enabled;
    }
}
customElements.define('base-element', BaseElement);
