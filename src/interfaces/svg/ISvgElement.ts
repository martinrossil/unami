import ISizeElement from '../core/ISizeElement';
import IRectangle from '../vo/IRectangle';

export default interface ISvgElement extends ISizeElement {
    viewBox: IRectangle | null;
}
