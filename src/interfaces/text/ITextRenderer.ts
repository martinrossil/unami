import IDisplayElement from '../core/IDisplayElement';

export default interface ITextRenderer extends IDisplayElement {
    text: string;
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    letterSpacing: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
}
