import { useState } from 'react';
import style from './UserLIst.module.css';
import UserRow from './UserRow';

const UserList = ({ users }) => {
	const [search, setSearch] = useState('');
	const usersFiltered = filterUsersByName(users, search);
	const usersRendered = renderUsers(usersFiltered);
	return (
		<div className={style.list}>
			<h1>Listado de usuarios</h1>
			<form className={style.form}>
			<input
				type='text'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			></input>
			<div className={style.active}>
				<input type='checkbox'></input>
				<span>Solo activos</span>
			</div>
			<select>
				<option value={0}>Por defecto</option>
				<option value={1}>Por nombre</option>
			</select>
			</form>
			{usersRendered}
		</div>
	);
};

const filterUsersByName = (users, search) => {
	if (!search) return users;
	const lowerCaseSearch = search.toLowerCase();
	return users.filter(user =>
		user.name.toLowerCase().startsWith(lowerCaseSearch)
	);
};

const renderUsers = users => {
	if (users.length <= 0) return <p>No hay usuarios</p>;
	return users.map(user => <UserRow key={user.name} {...user} />);
};

export default UserList;
