import React from 'react';
import ReactDOM from 'react-dom';

//styles import
import './index.css';

//redux imports
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//reducer import
import Reducer from './reducers';

//components import
import App from './App';
import reportWebVitals from './reportWebVitals';

//property declaration
const ReduxThunk = require('redux-thunk').default;
const store = createStore(Reducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
