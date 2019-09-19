import './App.css';

import React from 'react';

import { UseEffectExample } from './UseEffectExample';

const App = () => {
	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<UseEffectExample />
			<div className="flex-row">
				<div className="flex-large">
					<h2>Add user</h2>
				</div>
				<div className="flex-large">
					<h2>View users</h2>
				</div>
			</div>
		</div>
	);
};

export { App };
