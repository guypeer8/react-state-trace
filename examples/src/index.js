import React from 'react';
import { render} from 'react-dom';
import StateTrace from '../../src/hooks';

const demoState = {
    user: {
        name: 'Guy Peer',
        email: 'guypeer8@gmail.com',
        password: 'IamGuy8',
    },
    modals: {
        active: 'login-modal',
    },
};

const App = () => (
    <StateTrace state={demoState} />
);

render(<App />, document.getElementById("root"));
