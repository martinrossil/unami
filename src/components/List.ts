import ScrollContainer from '../core/ScrollContainer';
import IList from '../interfaces/components/IList';
import IListItemRenderer from '../interfaces/components/IListItemRenderer';
import IArrayCollection from '../interfaces/data/IArrayCollection';
import IEventListener from '../interfaces/event/IEventListener';
import ListItemRenderer from './ListItemRenderer';

export default class List<Item> extends ScrollContainer implements IList<Item> {
    private listItemRendererLookup: Map<Item, IListItemRenderer<Item> | undefined> = new Map();
    public constructor() {
        super();
        this.name = 'List';
        this.itemAdded = this.itemAdded.bind(this);
        this.itemsAdded = this.itemsAdded.bind(this);
        this.itemRemoved = this.itemRemoved.bind(this);
        this.reset = this.reset.bind(this);
    }

    private addItemRenderers(items: Item[]): void {
        const listItemRenderers: IListItemRenderer<Item>[] = [];
        for (const item of items) {
            const listItemRenderer: IListItemRenderer<Item> = new this.ListItemRenderer();
            listItemRenderer.data = item;
            this.listItemRendererLookup.set(item, listItemRenderer);
            listItemRenderers.push(listItemRenderer);
        }
        this.addElements(listItemRenderers);
        this.updateSelectedItemRenderer();
    }

    private itemAdded(e: CustomEvent<Item>): void {
        const itemRenderer: IListItemRenderer<Item> = new this.ListItemRenderer();
        itemRenderer.data = e.detail;
        this.listItemRendererLookup.set(e.detail, itemRenderer);
        this.addElement(itemRenderer);
        this.updateSelectedItemRenderer();
    }

    private itemsAdded(e: CustomEvent<Item[]>): void {
        this.addItemRenderers(e.detail);
    }

    private itemRemoved(e: CustomEvent<Item>): void {
        const itemRenderer: IListItemRenderer<Item> | undefined = this.listItemRendererLookup.get(e.detail);
        if (itemRenderer) {
            this.removeElement(itemRenderer);
        }
        this.updateSelectedItemRenderer();
    }

    private reset(): void {
        this.removeElements();
        this.listItemRendererLookup.clear();
        if (this.dataProvider) {
            this.addItemRenderers(this.dataProvider.source);
        }
    }

    private updateSelectedItemRenderer(): void {
        this.listItemRendererLookup.forEach((itemRenderer: IListItemRenderer<Item> | undefined) => {
            if (itemRenderer) {
                itemRenderer.selected = false;
            }
        });
        if (this.selectedItemRenderer) {
            this.selectedItemRenderer.selected = true;
        }
    }

    private _ListItemRenderer!: new () => IListItemRenderer<Item>;

    public set ListItemRenderer(value: new () => IListItemRenderer<Item>) {
        if (this._ListItemRenderer === value) {
            return;
        }
        this._ListItemRenderer = value;
        this.reset();
    }

    public get ListItemRenderer(): new () => IListItemRenderer<Item> {
        if (!this._ListItemRenderer) {
            this._ListItemRenderer = ListItemRenderer;
        }
        return this._ListItemRenderer;
    }

    private _dataProvider: IArrayCollection<Item> | null = null;

    public set dataProvider(value: IArrayCollection<Item> | null) {
        if (this._dataProvider === value) {
            return;
        }
        if (this._dataProvider) {
            this._dataProvider.removeEventListener('itemAdded', this.itemAdded as IEventListener);
            this._dataProvider.removeEventListener('itemsAdded', this.itemsAdded as IEventListener);
            this._dataProvider.removeEventListener('itemRemoved', this.itemRemoved as IEventListener);
            this._dataProvider.removeEventListener('reset', this.reset as IEventListener);
        }
        this._dataProvider = value;
        if (this._dataProvider) {
            this._dataProvider.addEventListener('itemAdded', this.itemAdded as IEventListener);
            this._dataProvider.addEventListener('itemsAdded', this.itemsAdded as IEventListener);
            this._dataProvider.addEventListener('itemRemoved', this.itemRemoved as IEventListener);
            this._dataProvider.addEventListener('reset', this.reset as IEventListener);
        }
        this.reset();
    }

    public get dataProvider(): IArrayCollection<Item> | null {
        return this._dataProvider;
    }

    private get selectedItemRenderer(): IListItemRenderer<Item> | undefined {
        if (this.selectedItem) {
            return this.listItemRendererLookup.get(this.selectedItem);
        }
        return undefined;
    }

    public get selectedItem(): Item | null {
        if (this.dataProvider) {
            return this.dataProvider.getItemAt(this.selectedIndex);
        }
        return null;
    }

    private _selectedIndex = NaN;

    public set selectedIndex(value: number) {
        if (isNaN(this._selectedIndex) && isNaN(value)) {
            return;
        }
        if (this._selectedIndex === value) {
            return;
        }
        this._selectedIndex = value;
        this.updateSelectedItemRenderer();
    }

    public get selectedIndex(): number {
        return this._selectedIndex;
    }
}
customElements.define('list-element', List);
