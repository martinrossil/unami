import IColorRange from '../interfaces/design/IColorRange';
import IColor from '../interfaces/vo/IColor';
import Color from '../vo/Color';

export default class ColorRange implements IColorRange {
    public c50: IColor = new Color(0, 0, 98); // Gray 50
    public c100: IColor = new Color(240, 5, 96); // Gray 100
    public c200: IColor = new Color(240, 6, 90); // Gray 200
    public c300: IColor = new Color(240, 5, 84); // Gray 300
    public c400: IColor = new Color(240, 5, 65); // Gray 400
    public c500: IColor = new Color(240, 4, 46); // Gray 500
    public c600: IColor = new Color(240, 5, 34); // Gray 600
    public c700: IColor = new Color(240, 5, 26); // Gray 700
    public c800: IColor = new Color(240, 4, 16); // Gray 800
    public c900: IColor = new Color(240, 6, 10); // Gray 900
}
