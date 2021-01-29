import { FontWeight } from '../../types/FontWeight';
import ITypeFace from '../vo/ITypeFace';

export default interface ITypeScale {
    typeFace: ITypeFace
    fontWeight: FontWeight;
    fontSize: number;
    letterSpacing: number;
    toString(): string;
}
