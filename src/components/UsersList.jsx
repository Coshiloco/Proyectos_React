import { useState } from 'react';
import style from './UserLIst.module.css';
import UserRow from './UserRow';

const UserList = ({ users }) => {
	const [search, setSearch] = useState('');
	const usersRendered = filterAndRenderUsers(users, search);
	return (
		<div className={style.list}>
			<h1>Listado de usuarios</h1>
			<input
				type='text'
				name='search'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			></input>
			{usersRendered}
		</div>
	);
};

const filterAndRenderUsers = (users, search) => {
	const normalizedSearch = search.toLowerCase();
	const usersFiltered = search
		? users.filter(user => user.name.toLowerCase().startsWith(normalizedSearch))
		: users;
	const usersRendered =
		usersFiltered.length > 0 ? (
			usersFiltered.map(user => <UserRow key={user.name} {...user} />)
		) : (
			<p>No hay USuarios</p>
		);
	return usersRendered;
};

export default UserList;
