import { StateMachine } from './TS/StateMachine';

function demoAllScenarios() {
    const machine = new StateMachine();

    console.log(`Initial State: ${machine.getState()}`);

    machine.dispatch('turnOn');
    console.log(`Current State: ${machine.getState()}`);

    machine.dispatch('press');
    console.log(`Current State: ${machine.getState()}`);

    machine.dispatch('turnOff');
    console.log(`Current State: ${machine.getState()}`);

    machine.setState('Blink');
    console.log(`Current State: ${machine.getState()}`);

    machine.dispatch('press');
    console.log(`Current State: ${machine.getState()}`);

    try {
        machine.setState('InvalidState');
    } catch (error) {
        console.error('Caught error:', error);
    }
}

demoAllScenarios();
