import DisplayContainer from '../core/DisplayContainer';
import BoxShadowFilter from '../filters/BoxShadowFilter';
import IBadge from '../interfaces/components/IBadge';
import IButton from '../interfaces/components/IButton';
import IDisplayContainer from '../interfaces/core/IDisplayContainer';
import ILabelElement from '../interfaces/text/ILabelElement';
import ITextElement from '../interfaces/text/ITextElement';
import HorizontalLayout from '../layout/HorizontalLayout';
import VerticalLayout from '../layout/VerticalLayout';
import LabelElement from '../text/LabelElement';
import TextElement from '../text/TextElement';
import Color from '../vo/Color';
import Badge from './Badge';
import Button from './Button';

export default class Modal extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'Modal';
        this.backgroundColor = this.colors.neutral.c0;
        this.minWidth = 300;
        this.percentWidth = 50;
        this.addFilter(new BoxShadowFilter(0, 4, 6, -1, new Color(0, 0, 0, 0.1)));
        this.addFilter(new BoxShadowFilter(0, 2, 4, -1, new Color(0, 0, 0, 0.06)));
        this.cornerSize = 8;
        this.layout = new VerticalLayout(0, 'fill');
        this.addElement(this.body);
        this.addElement(this.bottomBar);
    }

    private _body!: IDisplayContainer;

    private get body(): IDisplayContainer {
        if (!this._body) {
            this._body = new DisplayContainer();
            this._body.padding = 24;
            this._body.layout = new VerticalLayout(24, 'fill');
            this._body.addElements([this.header, this.textElement]);
        }
        return this._body;
    }

    private _header!: IDisplayContainer;

    private get header(): IDisplayContainer {
        if (!this._header) {
            this._header = new DisplayContainer();
            this._header.layout = new HorizontalLayout();
            this._header.addElements([this.titleLabel, this.badge]);
        }
        return this._header;
    }

    private _titleLabel!: ILabelElement;

    private get titleLabel(): ILabelElement {
        if (!this._titleLabel) {
            this._titleLabel = new LabelElement();
            this._titleLabel.percentWidth = 100;
            this._titleLabel.text = 'Lorem Ipsum';
            this._titleLabel.typeFace = this.typography.primary;
            this._titleLabel.fontSize = 32;
            this._titleLabel.fontWeight = 700;
            this._titleLabel.textColor = this.colors.neutral.c700;
        }
        return this._titleLabel;
    }

    private _badge!: IBadge;

    private get badge(): IBadge {
        if (!this._badge) {
            this._badge = new Badge();
            this._badge.text = '1.254,43'
        }
        return this._badge;
    }

    private _textElement!: ITextElement;

    private get textElement(): ITextElement {
        if (!this._textElement) {
            this._textElement = new TextElement();
            this._textElement.typeFace = this.typography.secondary;
            this._textElement.textColor = this.colors.neutral.c500;
            this._textElement.fontWeight = 500;
            this._textElement.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';
        }
        return this._textElement;
    }

    private _bottomBar!: IDisplayContainer;

    private get bottomBar(): IDisplayContainer {
        if (!this._bottomBar) {
            this._bottomBar = new DisplayContainer();
            // this._bottomBar.height = 56;
            this._bottomBar.paddingTop = this._bottomBar.paddingBottom = 8;
            this._bottomBar.paddingRight = 8;
            this._bottomBar.backgroundColor = this.colors.neutral.c100;
            this._bottomBar.layout = new HorizontalLayout(8, 'right');
            this._bottomBar.addElements([this.cancelButton, this.okButton]);
        }
        return this._bottomBar;
    }

    private _cancelButton!: IButton;

    private get cancelButton(): IButton {
        if (!this._cancelButton) {
            this._cancelButton = new Button();
            this._cancelButton.label = 'Cancel';
        }
        return this._cancelButton;
    }

    private _okButton!: IButton;

    private get okButton(): IButton {
        if (!this._okButton) {
            this._okButton = new Button();
            this._okButton.label = 'Continue';
            this._okButton.backgroundColor = this.colors.success.c500;
            this._okButton.textColor = this.colors.success.c50;
        }
        return this._okButton;
    }
}
customElements.define('modal-element', Modal);
