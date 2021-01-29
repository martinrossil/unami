import { ColorType } from '../../types/ColorType';
import IDisplayContainer from '../core/IDisplayContainer';

export default interface IBadge extends IDisplayContainer {
    text: string;
    color: ColorType;
}
