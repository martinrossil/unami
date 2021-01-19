import IColor from '../vo/IColor';

export default interface IBoxShadowFilter {
    x: number;
    y: number;
    blur: number;
    spread: number;
    color: IColor;
    inset: boolean;
    toString(): string;
}
