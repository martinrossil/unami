import IDisplayContainer from '../core/IDisplayContainer';

export default interface IListItemRenderer<Item> extends IDisplayContainer {
    data: Item | null;
    selected: boolean;
}
