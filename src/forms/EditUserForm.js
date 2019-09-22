import React, { useEffect, useState } from 'react';

const EditUserForm = props => {
	const [user, setUser] = useState(props.currentUser);

	// обновляем стейт всякий раз когда обновляются пропсы
	useEffect(() => {
		setUser(props.currentUser);
	}, [props]);

	const handleInputChange = event => {
		const { name, value } = event.target;

		setUser({ ...user, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (!user.name || !user.username) return;

		props.updateUser(user.id, user);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Name</label>
			<input
				type="text"
				name="name"
				value={user.name}
				onChange={handleInputChange}
			/>
			<label>Username</label>
			<input
				type="text"
				name="username"
				value={user.username}
				onChange={handleInputChange}
			/>
			<button type="submit">Update</button>
			<button type="button" onClick={() => props.setEditing(false)}>
				Cancel
			</button>
		</form>
	);
};

export { EditUserForm };
