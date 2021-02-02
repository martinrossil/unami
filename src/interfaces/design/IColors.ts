import IColorScale from './IColorScale';

export default interface IColors {
    readonly primary: IColorScale;
    readonly secondary: IColorScale;
    readonly success: IColorScale;
    readonly danger: IColorScale;
    readonly neutral: IColorScale;
}
