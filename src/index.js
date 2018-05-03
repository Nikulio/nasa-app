
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App/index"
import ReduxThunk from "redux-thunk"

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux"
import reducers from './reducers';

import 'reset-css/reset.css';

const reduxDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducers,
  reduxDevTools,
  applyMiddleware(ReduxThunk)
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById("root")
 );
