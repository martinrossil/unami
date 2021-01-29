import EventDispatcher from '../event/EventDispatcher';
import ITheme from '../interfaces/design/ITheme';
import IEventDispatcher from '../interfaces/event/IEventDispatcher';
import Theme from './Theme';

export default class Design {
    public static THEME_CHANGED = 'Design.THEME_CHANGED';
    public static dispatcher: IEventDispatcher = new EventDispatcher();
    private static _theme: ITheme;

    public static set theme(value: ITheme) {
        if (this._theme === value) {
            return;
        }
        this._theme = value;
        this.dispatcher.dispatch(Design.THEME_CHANGED, null, false);
    }

    public static get theme(): ITheme {
        if (!this._theme) {
            this._theme = new Theme();
        }
        return this._theme;
    }
}
