import React, { useState } from 'react';

const AddUserForm = props => {
	const initialFormState = { id: null, name: "", username: "" };
	const [user, setUser] = useState(initialFormState);
	const handleInputChange = event => {
		const { name, value } = event.currentTarget;
		setUser({ ...user, [name]: value });
	};
	const handleSubmit = event => {
		event.preventDefault();
		if (!user.name || !user.username) return;

		// вызываем addUser из хука из App
		props.addUser(user);
		// обнуляем форму, с помощью setUser функции
		// которая у нас взята из хука в данном компоненте
		setUser(initialFormState);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Name {user.name}</label>
			<input
				type="text"
				name="name"
				value={user.name}
				onChange={handleInputChange}
			/>
			<label htmlFor="username">Username {user.username}</label>
			<input
				type="text"
				name="username"
				value={user.username}
				onChange={handleInputChange}
			/>
			<button type="submit">Add new user</button>
		</form>
	);
};

export { AddUserForm };
