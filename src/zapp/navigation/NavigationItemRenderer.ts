import ListItemRenderer from '../../components/ListItemRenderer';
import IPathElement from '../../interfaces/svg/IPathElement';
import ILabelElement from '../../interfaces/text/ILabelElement';
import HorizontalLayout from '../../layout/HorizontalLayout';
import PathElement from '../../svg/PathElement';
import LabelElement from '../../text/LabelElement';
import Color from '../../vo/Color';
import INavigationItem from '../interfaces/vo/INavigationItem';

export default class NavigationItemRenderer extends ListItemRenderer<INavigationItem> {
    public constructor() {
        super();
        this.name = 'NavigationItemRenderer';
        this.height = 40;
        this.paddingLeft = 8;
        this.paddingRight = 16;
        // this.paddingTop = 8;
        // this.paddingBottom = 8;
        this.cornerSize = 4;
        this.backgroundColor = this.colors.primary.c300;
        this.layout = new HorizontalLayout(16, 'left', 'middle');
        this.addElement(this.pathElement);
        this.addElement(this.labelElement);
    }

    protected dataChanged(): void {
        if (this.data) {
            this.labelElement.text = this.data.text;
            this.pathElement.pathData = this.data.icon;
        }
    }

    private _pathElement!: IPathElement;

    private get pathElement(): IPathElement {
        if (!this._pathElement) {
            this._pathElement = new PathElement();
            this._pathElement.size(24, 24);
            this._pathElement.pathData = 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7';
            this._pathElement.strokeWidth = 2;
            this._pathElement.strokeColor = this.colors.primary.c700;
            this._pathElement.fillColor = new Color(0, 0, 0, 0.0);
        }
        return this._pathElement;
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.typeFace = this.typography.secondary;
            this._labelElement.fontSize = 14;
            this._labelElement.fontWeight = 500;
            this._labelElement.percentWidth = 100;
            this._labelElement.textColor = this.colors.primary.c700;
        }
        return this._labelElement;
    }
}
customElements.define('navigation-item-renderer', NavigationItemRenderer);
