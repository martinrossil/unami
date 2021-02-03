import Badge from './components/Badge';
import Button from './components/Button';
import List from './components/List';
import ApplicationElement from './core/ApplicationElement';
import ArrayCollection from './data/ArrayCollection';
import BoxShadowFilter from './filters/BoxShadowFilter';
import IBadge from './interfaces/components/IBadge';
import IButton from './interfaces/components/IButton';
import IList from './interfaces/components/IList';
import IArrayCollection from './interfaces/data/IArrayCollection';
import ILabelElement from './interfaces/text/ILabelElement';
import IUnamiDev from './IUnamiDev';
import VerticalLayout from './layout/VerticalLayout';
import LabelElement from './text/LabelElement';
import Color from './vo/Color';
import TypeFace from './vo/TypeFace';
import INavigationItem from './zapp/interfaces/vo/INavigationItem';
import NavigationItemRenderer from './zapp/navigation/NavigationItemRenderer';
import NaviagtionItem from './zapp/vo/NavigationItem';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        this.name = 'UnamiDev';
        this.backgroundColor = this.colors.neutral.c100;
        this.theme.typography.primary = new TypeFace('Bitter', 0.71, 0.03, 0.02);
        this.theme.typography.secondary = new TypeFace('Inter', 0.727, 0.09, 0.0);
        this.layout = new VerticalLayout(24, 'center', 'middle');
        window.addEventListener('load', () => {
            this.addElement(this.list);
        });
        window.addEventListener('click', () => {
            //
        });
    }

    private _list!: IList<INavigationItem>;

    private get list(): IList<INavigationItem> {
        if (!this._list) {
            this._list = new List();
            this._list.backgroundColor = this.colors.neutral.c0;
            this._list.cornerSize = 4;
            this._list.padding = 8;
            this._list.percentWidth = 50;
            this._list.minHeight = 400;
            this._list.ListItemRenderer = NavigationItemRenderer;
            this._list.dataProvider = this.navigationItems;
            this._list.layout = new VerticalLayout(8, 'fill');
            this._list.addFilter(new BoxShadowFilter(0, 4, 6, -1, new Color(0, 0, 0, 0.1)));
            this._list.addFilter(new BoxShadowFilter(0, 2, 4, -1, new Color(0, 0, 0, 0.06)));
            this._list.horizontalScrollEnabled = false;
            this._list.verticalScrollEnabled = true;
        }
        return this._list;
    }

    private _navigationItems!: IArrayCollection<INavigationItem>;

    private get navigationItems(): IArrayCollection<INavigationItem> {
        if (!this._navigationItems) {
            this._navigationItems = new ArrayCollection([
                new NaviagtionItem('Home', 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'),
                new NaviagtionItem('Blog', 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'),
                new NaviagtionItem('About', 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'),
                new NaviagtionItem('Work', 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'),
                new NaviagtionItem('Design', 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'),
                new NaviagtionItem('Home', 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'),
                new NaviagtionItem('Blog', 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'),
                new NaviagtionItem('About', 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'),
                new NaviagtionItem('Work', 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'),
                new NaviagtionItem('Design', 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'),
                new NaviagtionItem('Home', 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'),
                new NaviagtionItem('Blog', 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'),
                new NaviagtionItem('About', 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'),
                new NaviagtionItem('Work', 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'),
                new NaviagtionItem('Design', 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z')
            ]);
        }
        return this._navigationItems;
    }

    private _button!: IButton;

    private get button(): IButton {
        if (!this._button) {
            this._button = new Button();
        }
        return this._button;
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.text = 'Lorem Ipsum';
            this._labelElement.fontSize = 56;
            this._labelElement.typeFace = this.theme.typography.primary;
        }
        return this._labelElement;
    }

    private _badge!: IBadge;

    private get badge(): IBadge {
        if (!this._badge) {
            this._badge = new Badge();
            this._badge.text = 'DEFAULT';
        }
        return this._badge;
    }
}
customElements.define('unami-dev', UnamiDev);
