import BlurFilter from '../../filters/BlurFilter';
import BoxShadowFilter from '../../filters/BoxShadowFilter';
import IColor from '../vo/IColor';
import ILinearGradient from '../vo/ILinearGradient';
import ISizeElement from './ISizeElement';

export default interface IDisplayElement extends ISizeElement {
    backgroundColor: IColor | ILinearGradient | null;
    cornerSize: number;
    addFilter(filter: BlurFilter | BoxShadowFilter): void;
}
