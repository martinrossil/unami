export default interface IBaseElement {
    dispatch<Item>(typeArg: string, payload: Item | null, bubbles: boolean): void;
    name: string;
    connected: boolean;
    visible: boolean;
    notifyThemeChange: boolean;
}
