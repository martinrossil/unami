import IColor from '../vo/IColor';

export default interface IShadowFilter {
    x: number;
    y: number;
    blur: number;
    color: IColor;
    toString(): string;
}
