import { CornerType } from '../../types/CornerType';
import ISvgElement from './ISvgElement';

export default interface ISurfaceElement extends ISvgElement {
    cornerSize: number;
    cornerType: CornerType;
}
