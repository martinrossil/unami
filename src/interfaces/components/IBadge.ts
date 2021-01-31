import { IColor, ITypeFace } from '../..';
import { FontWeight } from '../../types/FontWeight';
import IDisplayContainer from '../core/IDisplayContainer';

export default interface IBadge extends IDisplayContainer {
    text: string;
    textColor: IColor | null;
    fontWeight: FontWeight;
    fontSize: number;
    typeFace: ITypeFace;
}
