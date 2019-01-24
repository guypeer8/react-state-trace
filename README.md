# react-state-trace 

- React devtool that lets you break your app state into its atomic particles and view each of them autonomously as they change.

## Demo
![react-state-trace](https://user-images.githubusercontent.com/13187428/51093144-e080e900-17a8-11e9-8a37-f087112c695a.gif)

## Installation
```
npm install --save react-state-trace
```

## Usage
 - Press `shift + s` to show or hide the devtool
```js
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import StateViewer from 'react-state-trace';

const App = () => (
    <div>
        <StateViewer store={store} />  
        <div>
            <p>REACT STATE TRACE IS IN THE HOUSE</p>
            <button>Like</button>
        </div>
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

- `StateViewer` is a toggleable component through which you can navigate your app state and see all the moving parts as they change in real time.
- `props`. one of the following should be passed to the component to track the state:
  - `state` - explicitly pass the app state.
  - `store` - pass a store holding the app state. the store should have one of the following attributes:
    - `getState` - a function that returns the app state (as implemented im redux for example).
    - `state` - the application state attribute.
  - `dev` - defaults to `true`, pass `false` in order for the devtool not to render.

---
