import { IState } from './IState';
import { IStateMachine } from './IStateMachine';
import { OffState } from './OffState';
import { OnState } from './OnState';
import { BlinkState } from './BlinkState';

export class StateMachine implements IStateMachine {
    private currentState: IState;
    private states: { [key: string]: IState } = {
        Off: new OffState(this),
        On: new OnState(this),
        Blink: new BlinkState(this),
    };

    constructor(initialState: string = 'Off') {
        this.currentState = this.states[initialState];
        this.currentState.onEnter?.();
    }

    getState(): string {
        return this.currentState.constructor.name.replace('State', '');
    }

    setState(newState: string) {
        this.currentState.onExit?.();
        this.currentState = this.states[newState];
        this.currentState.onEnter?.();
    }

    dispatch(action: string) {
        const transition = this.currentState.getTransitions().get(action);
        if (transition) {
            transition();
        } else {
            console.log('Invalid action');
        }
    }
}
