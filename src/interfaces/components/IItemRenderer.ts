import IDisplayContainer from '../core/IDisplayContainer';
import IPoint from '../vo/IPoint';

export default interface IItemRenderer<Item> extends IDisplayContainer {
    data: Item | null;
    selected: boolean;
    initial(): void;
    hover(): void;
    pressed(point: IPoint): void;
    triggered(): void;
}
