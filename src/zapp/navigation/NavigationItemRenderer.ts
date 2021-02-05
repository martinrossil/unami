import ItemRenderer from '../../components/ItemRenderer';
import IPathElement from '../../interfaces/svg/IPathElement';
import ILabelElement from '../../interfaces/text/ILabelElement';
import IPoint from '../../interfaces/vo/IPoint';
import HorizontalLayout from '../../layout/HorizontalLayout';
import PathElement from '../../svg/PathElement';
import LabelElement from '../../text/LabelElement';
import Color from '../../vo/Color';
import INavigationItem from '../interfaces/vo/INavigationItem';

export default class NavigationItemRenderer extends ItemRenderer<INavigationItem> {
    public constructor() {
        super();
        this.name = 'NavigationItemRenderer';
        this.height = 40;
        this.paddingX = 8;
        this.cornerSize = 4;
        this.layout = new HorizontalLayout(16, 'left', 'middle');
        this.addElement(this.pathElement);
        this.addElement(this.labelElement);
    }

    public initial(): void {
        if (!this.selected) {
            this.backgroundColor = null;
        } else {
            this.backgroundColor = this.colors.primary.c800;
        }
    }

    public hover(): void {
        this.backgroundColor = this.colors.primary.c900;
    }
    // eslint-disable-next-line
    public pressed(point: IPoint): void {
        this.backgroundColor = this.colors.primary.c800;
    }

    protected selectedChanged(): void {
        if (this.selected) {
            this.backgroundColor = this.colors.primary.c800;
            return;
        }
        this.backgroundColor = null;
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
            this._pathElement.strokeWidth = 2;
            this._pathElement.strokeColor = this.colors.primary.c300;
            this._pathElement.fillColor = new Color(0, 0, 0, 0.0);
        }
        return this._pathElement;
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.enabled = false;
            this._labelElement.typeFace = this.typography.secondary;
            this._labelElement.fontSize = 14;
            this._labelElement.fontWeight = 500;
            this._labelElement.percentWidth = 100;
            this._labelElement.textColor = this.colors.primary.c300;
        }
        return this._labelElement;
    }
}
customElements.define('navigation-item-renderer', NavigationItemRenderer);
