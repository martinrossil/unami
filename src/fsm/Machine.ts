import IState from '../interfaces/fsm/IState';
import State from './State';

export default class Machine<Host> {
    protected host: Host;
    protected current: IState;
    protected readonly initial: IState = new State('initial');
    public constructor(host: Host) {
        this.host = host;
        this.current = this.initial;
        this.send = this.send.bind(this);
    }

    protected send(e: Event): void {
        const state = this.current.getState(e.type);
        if (this.current !== state) {
            if (this.current.exit) {
                this.current.exit(e);
            }
            this.current = state;
            if (this.current.entry) {
                this.current.entry(e);
            }
            if (this.current.on) {
                this.current.on(e);
            }
        }
    }
}
