import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './components/App';
import Login from './components/Login';
import { counterReducer } from './reducers/counterReducer';
import { userReducer } from './reducers/userReducer';

const combined = combineReducers({
  counterReducer,
  userReducer
})
/**
 * createStore  -Creates a Redux store that holds the state tree.
 * @param reducer A function that returns the next state tree, given the
 *   current state tree and the action to handle.
 * @returns A Redux store that lets you read the state, dispatch actions and
 *   subscribe to changes.
 */
const store = createStore(combined);


/**
 * Provider - is a "react-redux" built-in component
 * Makes the Redux store available to the connect() 
 * calls in the component hierarchy below.
 */
const ProviderWrraper = () => (
  <Provider store={store}>
    { /*inside Provider we can create only one element (like return in render function)*/ }
    <div>
      <Login />
      <App />
    </div>
  </Provider>
);

render(<ProviderWrraper />, document.getElementById('root'));
