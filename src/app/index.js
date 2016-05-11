import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import Login from './components/login';
import {Router, Route, browserHistory} from 'react-router';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={Login}/>
		<Route path="dashboard" component={App}/>
	</Router>
)

render(router,document.getElementById('app'));