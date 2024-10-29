const machine = {
    // initial state
    state: 'OFF',

    // actions for state transition
    transitions: {
        OFF: {
            press: function () { this.state = 'ON'; }
        },
        ON: {
            press: function () { this.state = 'BLINK'; }
        },
        BLINK: {
            press: function () { this.state = 'OFF'; }
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

// usage
const flashlight = Object.create(machine);

console.log(flashlight.state); // OFF
flashlight.dispatch('press');
console.log(flashlight.state); // ON
flashlight.dispatch('press');
console.log(flashlight.state); // BLINK