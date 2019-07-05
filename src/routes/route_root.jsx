import React from 'react';
import { renderRoutes } from 'react-router-config'
import asyncComponent from './async_component.jsx';
import App from '../components/app.jsx';


import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'


const routes = [
	{
		path: '/',
		component: App,
		routes: [
			{
				path: '/',
				exact: true,
				component: asyncComponent(
					() => System.import('../containers/home.jsx').then(module => module.default),
					{ name: 'index' }
				)
			}, {
				path: '/book',
				exact: true,
				component: asyncComponent(
					() => System.import('../containers/book.jsx').then(module => module.default),
					{ name: 'index' }
				)
			}, {
				path: '/product',
				exact: true,
				component: asyncComponent(
					() => System.import('../containers/product.jsx').then(module => module.default),
					{ name: 'index' }
				)
			}
		]
	}
]
const RouteRoot = () => (
	<Router>
		{renderRoutes(routes)}
	</Router>
)
export default RouteRoot