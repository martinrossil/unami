import IDisplayElement from '../core/IDisplayElement';
import ITypeFace from '../vo/ITypeFace';

export default interface IBaseText extends IDisplayElement {
    text: string;
    typeFace: ITypeFace;
    fontSize: number;
}
