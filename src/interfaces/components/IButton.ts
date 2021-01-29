import { FontWeight } from '../../types/FontWeight';
import IDisplayContainer from '../core/IDisplayContainer';
import IColor from '../vo/IColor';
import ITypeFace from '../vo/ITypeFace';

export default interface IButton extends IDisplayContainer {
    label: string;
    textColor: IColor | null;
    typeFace: ITypeFace;
    fontWeight: FontWeight;
    fontSize: number;
    letterSpacing: number;
}
