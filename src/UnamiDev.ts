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
import IEventListener from './interfaces/event/IEventListener';
import ILabelElement from './interfaces/text/ILabelElement';
import IUnamiDev from './IUnamiDev';
import HorizontalLayout from './layout/HorizontalLayout';
import VerticalLayout from './layout/VerticalLayout';
import LabelElement from './text/LabelElement';
import Color from './vo/Color';
import TypeFace from './vo/TypeFace';
import { HeroIcon } from './zapp/enums/HeroIcon';
import INavigationItem from './zapp/interfaces/vo/INavigationItem';
import BottomNavigationItemRenderer from './zapp/navigation/BottomNavigationItemRenderer';
import NavigationItemRenderer from './zapp/navigation/NavigationItemRenderer';
import NavigationItem from './zapp/vo/NavigationItem';

export default class UnamiDev extends ApplicationElement implements IUnamiDev {
    public constructor() {
        super();
        this.name = 'UnamiDev';
        this.backgroundColor = new Color(218, 60, 8);
        // this.backgroundColor = this.colors.neutral.c100;
        // this.theme.typography.primary = new TypeFace('Bitter', 0.71, 0.03, 0.02);
        this.theme.typography.primary = new TypeFace('Eurostile Extended', 0.68, 0.09, 0.025);
        this.theme.typography.secondary = new TypeFace('Inter', 0.727, 0.09, 0.0);
        // this.theme.typography.secondary = new TypeFace('Eurostile', 0.67, 0.06, 0.01);
        this.layout = new VerticalLayout(200, 'center', 'middle');
        window.addEventListener('load', () => {
            // this.addElement(this.list);
            this.addElement(this.bottomNavigationList);
            // this.addElement(this.labelElement);
            // this.addElement(this.labelElement2);
        });
        window.addEventListener('click', () => {
            // this.list.dataProvider = this.navigationItems;
        });

        this.addEventListener('triggered', (e: Event) => {
            console.log(this.name, e.type);
        });
    }

    private selectedItemChanged(e: CustomEvent<INavigationItem>): void {
        console.log('unami', this.name, e.type, e.detail);
    }

    private selectedIndexChanged(e: CustomEvent<number>): void {
        console.log('unami', this.name, e.type, e.detail);
    }

    private _labelElement!: ILabelElement;

    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new LabelElement();
            this._labelElement.text = 'TRON 80';
            this._labelElement.fontSize = 50;
            this._labelElement.fontWeight = 400;
            this._labelElement.letterSpacing = 10;
            this._labelElement.textColor = new Color(18, 100, 46); // hsl(18,100,46)
            this._labelElement.typeFace = this.theme.typography.primary;
        }
        return this._labelElement;
    }

    private _labelElement2!: ILabelElement;

    private get labelElement2(): ILabelElement {
        if (!this._labelElement2) {
            this._labelElement2 = new LabelElement();
            this._labelElement2.text = 'TRON 80';
            this._labelElement2.fontSize = 50;
            this._labelElement2.fontWeight = 700;
            this._labelElement2.letterSpacing = 10;
            this._labelElement2.textColor = new Color(0, 100, 38); // hsl(0,100,38) red new Color(50, 98, 51); // yellow new Color(204, 97, 48);light blue
            this._labelElement2.typeFace = this.theme.typography.secondary;
        }
        return this._labelElement2;
    }

    private _bottomNavigationList!: IList<NavigationItem>;

    private get bottomNavigationList(): IList<NavigationItem> {
        if (!this._bottomNavigationList) {
            this._bottomNavigationList = new List();
            this._bottomNavigationList.selectedIndex = 0;
            this._bottomNavigationList.height = 56;
            this._bottomNavigationList.percentWidth = 100;
            this._bottomNavigationList.backgroundColor = this.colors.primary.c700;
            this._bottomNavigationList.addFilter(new BoxShadowFilter(0, -4, 6, -1, new Color(0, 0, 0, 0.1)));
            this._bottomNavigationList.addFilter(new BoxShadowFilter(0, -2, 4, -1, new Color(0, 0, 0, 0.06)));
            this._bottomNavigationList.dataProvider = this.navigationItems;
            this._bottomNavigationList.ItemRendererClass = BottomNavigationItemRenderer;
            this._bottomNavigationList.layout = new HorizontalLayout(0, 'center', 'middle');
        }
        return this._bottomNavigationList;
    }

    private _list!: IList<INavigationItem>;

    private get list(): IList<INavigationItem> {
        if (!this._list) {
            this._list = new List();
            this._list.backgroundColor = this.colors.primary.c700;
            // this._list.cornerSize = 4;
            this._list.selectedIndex = 0;
            this._list.padding = 8;
            this._list.width = 200;
            this._list.percentHeight = 100;
            this._list.ItemRendererClass = NavigationItemRenderer;
            this._list.dataProvider = this.navigationItems;
            this._list.layout = new VerticalLayout(8, 'fill');
            // this._list.addFilter(new BoxShadowFilter(0, 4, 6, -1, new Color(0, 0, 0, 0.1)));
            // this._list.addFilter(new BoxShadowFilter(0, 2, 4, -1, new Color(0, 0, 0, 0.06)));
            this._list.horizontalScrollEnabled = false;
            this._list.verticalScrollEnabled = true;
            this._list.addEventListener('selectedItemChanged', this.selectedItemChanged.bind(this) as IEventListener);
            this._list.addEventListener('selectedIndexChanged', this.selectedIndexChanged.bind(this) as IEventListener);
        }
        return this._list;
    }

    private _navigationItems!: IArrayCollection<INavigationItem>;

    private get navigationItems(): IArrayCollection<INavigationItem> {
        if (!this._navigationItems) {
            this._navigationItems = new ArrayCollection([
                new NavigationItem('Home', HeroIcon.HOME),
                new NavigationItem('Blog', HeroIcon.PENCIL_ALT),
                new NavigationItem('About', HeroIcon.USER),
                new NavigationItem('Work', HeroIcon.TERMINAL),
                new NavigationItem('Design', HeroIcon.SPARKLES)
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
