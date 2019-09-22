import './App.css';

import React, { useEffect, useState } from 'react';

import { AddUserForm } from './forms/AddUserForm';
import { EditUserForm } from './forms/EditUserForm';
import { UserTable } from './tables/UserTable';
import { UseEffectExample } from './UseEffectExample';

const App = () => {
	// добавили данные
	const usersDataArr = [
		{ id: 1, name: "Tania", username: "floppydiskette" },
		{ id: 2, name: "Max", username: "maxfarseer" }
	];

	// храним данные в localStorage
	const usersDataInitial =
		JSON.parse(window.localStorage.getItem("users")) || usersDataArr;

	// используем useState хук
	// в качестве начальных данных, передаем usersData
	// в users будем хранить пользователей, как будто это state.users
	// setUsers - это функция, как будто this.setState({ users: ... })
	const [users, setUsers] = useState(usersDataInitial);

	// если users изменился обновляем в localStorage
	useEffect(() => {
		window.localStorage.setItem("users", JSON.stringify(users));
	}, [users]);

	const [editing, setEditing] = useState(false);

	const initialFormState = { id: null, name: "", username: "" };

	const [currentUser, setCurrentUser] = useState(initialFormState);

	const addUser = user => {
		user.id = Date.now();
		setUsers([...users, user]);
	};

	const deleteUser = id => {
		setEditing(false);
		setUsers(users.filter(user => user.id !== id));
	};

	const updateUser = (id, updatedUser) => {
		setEditing(false);
		setUsers(users.map(user => (user.id === id ? updatedUser : user)));
	};

	const editRow = user => {
		setEditing(true);
		setCurrentUser({ id: user.id, name: user.name, username: user.username });
	};

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<UseEffectExample />
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</>
					) : (
						<>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
				</div>
			</div>
		</div>
	);
};

export { App };
