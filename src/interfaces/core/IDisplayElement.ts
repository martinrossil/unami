import IColor from '../vo/IColor';
import ISizeElement from './ISizeElement';

export default interface IDisplayElement extends ISizeElement {
    backgroundColor: IColor | null;
}
