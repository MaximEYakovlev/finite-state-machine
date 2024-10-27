const machine = {
    // initial state
    state: 'OFF',

    // actions for state transition
    transitions: {
        OFF: {
            press() { this.state = 'ON'; }
        },
        ON: {
            press() { this.state = 'BLINK'; }
        },
        BLINK: {
            press() { this.state = 'OFF'; }
        },
    },

    // method to dispatch actions
    dispatch(actionName) {
        const action = this.transitions[this.state][actionName];

        if (action) {
            action.call(this);
        } else {
            console.log('invalid action');
        }
    }
};