import IDisplayContainer from '../core/IDisplayContainer';
import IColor from '../vo/IColor';
import ITypeFace from '../vo/ITypeFace';

export default interface IBadgeElement extends IDisplayContainer {
    text: string;
    textColor: IColor | null;
    typeFace: ITypeFace;
}
