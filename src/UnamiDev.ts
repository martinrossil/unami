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
import VerticalLayout from './layout/VerticalLayout';
import LabelElement from './text/LabelElement';
import Color from './vo/Color';
import TypeFace from './vo/TypeFace';
import { HeroIcon } from './zapp/enums/HeroIcon';
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
        // this.layout = new VerticalLayout(24, 'center', 'middle');
        window.addEventListener('load', () => {
            this.addElement(this.list);
        });
        window.addEventListener('click', () => {
            this.list.dataProvider = this.navigationItems;
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

    private _list!: IList<INavigationItem>;

    private get list(): IList<INavigationItem> {
        if (!this._list) {
            this._list = new List();
            this._list.backgroundColor = this.colors.primary.c700;
            // this._list.cornerSize = 4;
            this._list.selectedIndex = 5;
            this._list.padding = 8;
            this._list.width = 200;
            this._list.percentHeight = 100;
            this._list.ItemRendererClass = NavigationItemRenderer;
            // this._list.dataProvider = this.navigationItems;
            this._list.layout = new VerticalLayout(8, 'fill');
            this._list.addFilter(new BoxShadowFilter(0, 4, 6, -1, new Color(0, 0, 0, 0.1)));
            this._list.addFilter(new BoxShadowFilter(0, 2, 4, -1, new Color(0, 0, 0, 0.06)));
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
                new NaviagtionItem('Home', HeroIcon.HOME),
                new NaviagtionItem('Blog', HeroIcon.PENCIL_ALT),
                new NaviagtionItem('About', HeroIcon.USER),
                new NaviagtionItem('Work', HeroIcon.TERMINAL),
                new NaviagtionItem('Design', HeroIcon.SPARKLES),
                new NaviagtionItem('Home', HeroIcon.HOME),
                new NaviagtionItem('Blog', HeroIcon.PENCIL_ALT),
                new NaviagtionItem('About', HeroIcon.USER),
                new NaviagtionItem('Work', HeroIcon.TERMINAL),
                new NaviagtionItem('Design', HeroIcon.SPARKLES),
                new NaviagtionItem('Home', HeroIcon.HOME),
                new NaviagtionItem('Blog', HeroIcon.PENCIL_ALT),
                new NaviagtionItem('About', HeroIcon.USER),
                new NaviagtionItem('Work', HeroIcon.TERMINAL),
                new NaviagtionItem('Design', HeroIcon.SPARKLES),
                new NaviagtionItem('Home', HeroIcon.HOME),
                new NaviagtionItem('Blog', HeroIcon.PENCIL_ALT),
                new NaviagtionItem('About', HeroIcon.USER),
                new NaviagtionItem('Work', HeroIcon.TERMINAL),
                new NaviagtionItem('Design', HeroIcon.SPARKLES)
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
