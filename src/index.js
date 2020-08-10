import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom"
import App from 'components/home/App'
import store from 'redux/configStore'
import api from 'server/http'
React.Component.prototype.$axios = api;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

