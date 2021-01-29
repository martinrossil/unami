import ITypeFace from '../vo/ITypeFace';
import ITypeScale from './ITypeScale';

export default interface ITypography {
    primary: ITypeFace;
    secondary: ITypeFace;
    headline1: ITypeScale;
    headline2: ITypeScale;
    headline3: ITypeScale;
    headline4: ITypeScale;
    headline5: ITypeScale;
    headline6: ITypeScale;
    subtitle1: ITypeScale;
    subtitle2: ITypeScale;
    body1: ITypeScale;
    body2: ITypeScale;
    button: ITypeScale;
    caption: ITypeScale;
    overline: ITypeScale;
}
