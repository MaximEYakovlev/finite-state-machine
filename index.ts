import { StateMachine } from "./TS/StateMachine";


const ledController = new StateMachine('Off');

// entering 'off' state
console.log(`Initial state: ${ledController.getState()}`);
// exiting 'off' state

// entering 'on' state
// exiting 'on' state

// entering 'blink' state
// exiting 'blink' state

// entering 'off' state
// exiting 'off' state