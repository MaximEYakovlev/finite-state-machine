import { StateMachine } from "./TS/StateMachine";


const ledController = new StateMachine('Off');

// entering 'off' state
console.log(`initial state: ${ledController.getState()}`);
// exiting 'off' state

// entering 'on' state
ledController.setState('On');
// exiting 'on' state

console.log(`state: ${ledController.getState()}`);

// entering 'blink' state
ledController.setState('Blink');
// exiting 'blink' state

console.log(`state: ${ledController.getState()}`);

// entering 'off' state
ledController.setState('Off');

console.log(`state: ${ledController.getState()}`);