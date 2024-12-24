import { IState } from './IState';
import { IStateMachine } from './IStateMachine';

export class OnState implements IState {
    constructor(private machine: IStateMachine) { }

    onEnter() {
        console.log('Entering On State');
    }

    onExit() {
        console.log('Exiting On State');
    }

    getTransitions(): Map<string, () => void> {
        return new Map([
            ['turnOff', () => this.machine.setState('Off')]
        ]);
    }
}