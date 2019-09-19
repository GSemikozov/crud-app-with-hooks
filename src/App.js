import './App.css';

import React, { useState } from 'react';

import { AddUserForm } from './forms/AddUserForm';
import { UserTable } from './tables/UserTable';
import { UseEffectExample } from './UseEffectExample';

const App = () => {
	// добавили данные
	const usersData = [
		{ id: 1, name: "Tania", username: "floppydiskette" },
		{ id: 2, name: "Max", username: "maxfarseer" }
	];

	// используем useState хук
	// в качестве начальных данных, передаем usersData
	// в users будем хранить пользователей, как будто это state.users
	// setUsers - это функция, как будто this.setState({ users: ... })
	const [users, setUsers] = useState(usersData);

	const addUser = user => {
		user.id = users.length + 1;

		setUsers([...users, user]);
	};

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<UseEffectExample />
			<div className="flex-row">
				<div className="flex-large">
					<h2>Add user</h2>
					<AddUserForm addUser={addUser} />
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} />
				</div>
			</div>
		</div>
	);
};

export { App };
