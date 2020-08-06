import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyWayApp from './App';

ReactDOM.render(
    <MyWayApp />, document.getElementById('root'));

serviceWorker.unregister();
