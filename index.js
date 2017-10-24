import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {counter} from './reducers/index';
import App from './components/App';
import {Provider} from 'react-redux';

const store = createStore(counter);

let rootElement = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);