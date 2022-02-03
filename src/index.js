import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';

import('./style.css')
import('bulma/css/bulma.min.css')
import('@fortawesome/fontawesome-free/css/all.css')

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
);