export default interface IBaseElement {
    dispatch<Item>(typeArg: string, payload: Item | null, bubbles: boolean): void;
    name: string;
    connected: boolean;
}
