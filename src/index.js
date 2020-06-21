import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import * as serviceWorker from './component/serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
  <Router basename={process.env.PUBLIC_URL}>
    <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
