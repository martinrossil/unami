import DisplayContainer from '../core/DisplayContainer';
import TouchMachine from '../fsm/TouchMachine';
import IItemRenderer from '../interfaces/components/IItemRenderer';
import IPoint from '../interfaces/vo/IPoint';

export default class ItemRenderer<Item> extends DisplayContainer implements IItemRenderer<Item> {
    public constructor() {
        super();
        this.name = 'ListItemRenderer';
    }

    private machine: TouchMachine = new TouchMachine(this);

    public initial(): void {
        // override
    }

    public hover(): void {
        // override
    }

    // eslint-disable-next-line
    public pressed(point: IPoint): void {
        // override
    }

    public triggered(): void {
        this.dispatch('itemRendererTriggered', this.data, true);
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
customElements.define('item-renderer', ItemRenderer);
