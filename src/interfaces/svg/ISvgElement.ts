import BlurFilter from '../../filters/BlurFilter';
import ShadowFilter from '../../filters/ShadowFilter';
import ISizeElement from '../core/ISizeElement';
import IRectangle from '../vo/IRectangle';

export default interface ISvgElement extends ISizeElement {
    viewBox: IRectangle | null;
    visible: boolean;
    addFilter(filter: BlurFilter | ShadowFilter): void;
}
