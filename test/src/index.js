import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import allReducers from './reducers/index';

const history = createBrowserHistory();
const store = createStore(allReducers);



ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
          <Route exact path="/" component={App}/>
      </Router>
    </Provider>, document.getElementById('root')
);

reportWebVitals();
