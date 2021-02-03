import DisplayContainer from '../core/DisplayContainer';
import IListItemRenderer from '../interfaces/components/IListItemRenderer';

export default class ListItemRenderer<Item> extends DisplayContainer implements IListItemRenderer<Item> {
    public constructor() {
        super();
        this.name = 'ListItemRenderer';
    }

    protected dataChanged(): void {
        // override
    }

    protected selectedChanged(): void {
        // override
    }

    private _data: Item | null = null;

    public set data(value: Item | null) {
        if (this._data === value) {
            return;
        }
        this._data = value;
        this.dataChanged();
    }

    public get data(): Item | null {
        return this._data;
    }

    private _selected = false;

    public set selected(value: boolean) {
        if (this._selected === value) {
            return;
        }
        this._selected = value;
        this.selectedChanged();
    }

    public get selected(): boolean {
        return this._selected;
    }
}
customElements.define('list-item-renderer', ListItemRenderer);
