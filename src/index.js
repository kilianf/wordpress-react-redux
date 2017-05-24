import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import MainApp from './MainApp.js'
import reduced from './reducers/'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const middleware = applyMiddleware(promise(), thunk)

const store = createStore(reduced, middleware)

ReactDOM.render(
	<Provider store={store}>
		<MainApp />
	</Provider>,
	document.getElementById('root')
);

