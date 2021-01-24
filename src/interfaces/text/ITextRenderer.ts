import { TextAlign } from '../../types/TextAlign';
import IDisplayElement from '../core/IDisplayElement';
import IColor from '../vo/IColor';

export default interface ITextRenderer extends IDisplayElement {
    text: string;
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    letterSpacing: number;
    lineHeight: number;
    textAlign: TextAlign;
    textColor: IColor | null;
    readonly clientWidth: number;
    readonly clientHeight: number;
}
