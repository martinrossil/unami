import IColors from './IColors';
import ITypography from './ITypography';

export default interface ITheme {
    readonly colors: IColors;
    readonly typography: ITypography;
}
