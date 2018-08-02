import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layouts/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
     rootEl)
}
if (module.hot) {
  module.hot.accept('./app/layouts/App', () => {
    setTimeout(render)
  })
}

render ();

 registerServiceWorker();
