import { StateMachine } from "./TS/StateMachine";


const ledController = new StateMachine('Off');

// entering 'off' state
console.log(`Initial state: ${ledController.getState()}`);
// exiting 'off' state

// entering 'on' state
ledController.setState('On');
// exiting 'on' state

// entering 'blink' state
ledController.setState('Blink');
// exiting 'blink' state

// entering 'off' state
ledController.setState('Off');