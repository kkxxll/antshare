import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Admin from './admin';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Admin />, document.getElementById('root'));
registerServiceWorker();
