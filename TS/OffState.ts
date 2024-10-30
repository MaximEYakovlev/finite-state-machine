import { IState } from './IState';
import { IStateMachine } from './IStateMachine';

export class OffState implements IState {
    constructor(private machine: IStateMachine) { }

    onEnter() {
        console.log('Entering Off State');
    }

    onExit() {
        console.log('Exiting Off State');
    }

    getTransitions(): Map<string, () => void> {
        return new Map([
            ['press', () => this.machine.setState('On')]
        ]);
    }
}