import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/index";
import ReduxThunk from "redux-thunk";

import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

import { BrowserRouter } from "react-router-dom";

import "reset-css/reset.css";

const reduxDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, reduxDevTools, applyMiddleware(ReduxThunk));

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
