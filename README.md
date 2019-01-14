# react-state-trace 

- React devtool that lets you break your app state into its atomic particles and view each of them autonomously as they change.

## Demo
![react-state-trace](https://user-images.githubusercontent.com/13187428/51093144-e080e900-17a8-11e9-8a37-f087112c695a.gif)

## Installation
```
npm install --save react-state-trace
npm install --save react@16.7.0-alpha.0 // hooks supported version
npm install --save react-dom@16.7.0-alpha.0 // hooks supported version
```

## Usage
```js
import React from 'react';
import store from './store';
import StateViewer from 'react-state-trace';

const App = () => (
    <StateViewer store={store} />  
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
