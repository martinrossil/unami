import INavigationItem from '../interfaces/vo/INavigationItem';

export default class NavigationItem implements INavigationItem {
    public text: string;
    public icon: string;
    public constructor(text: string, icon: string) {
        this.text = text;
        this.icon = icon;
    }
}
