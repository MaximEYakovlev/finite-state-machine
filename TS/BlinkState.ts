import { IState } from './IState';
import { IStateMachine } from './IStateMachine';

export class BlinkState implements IState {
    constructor(private machine: IStateMachine) { }

    onEnter() {
        console.log('Entering Blink State');
    }

    onExit() {
        console.log('Exiting Blink State');
    }

    getTransitions(): Map<string, () => void> {
        return new Map([
            ['press', () => this.machine.setState('Off')]
        ]);
    }
}