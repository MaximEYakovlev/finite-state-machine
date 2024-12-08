import { StateMachine } from "./TS/StateMachine";


const ledController = new StateMachine('Off');

console.log(`Initial state: ${ledController.getState()}`);