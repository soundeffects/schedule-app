import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

ReactDOM.render(<Provider store={createStore(reducer)}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
