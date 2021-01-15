import IColor from '../vo/IColor';
import ILinearGradient from '../vo/ILinearGradient';
import ISizeElement from './ISizeElement';

export default interface IDisplayElement extends ISizeElement {
    backgroundColor: IColor | ILinearGradient | null;
    cornerSize: number;
}
