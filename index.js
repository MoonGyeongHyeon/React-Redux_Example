import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {counter} from './src/reducers/index';
import App from './src/components/App';
import {Provider} from 'react-redux';

const store = createStore(counter);

let rootElement = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);