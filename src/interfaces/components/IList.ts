import IScrollContainer from '../core/IScrollContainer';
import IArrayCollection from '../data/IArrayCollection';
import IListItemRenderer from './IListItemRenderer';

export default interface IList<Item> extends IScrollContainer {
    dataProvider: IArrayCollection<Item> | null;
    selectedIndex: number;
    readonly selectedItem: Item | null;
    ListItemRenderer: new () => IListItemRenderer<Item>;
}
