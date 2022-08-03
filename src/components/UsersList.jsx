import { useState } from 'react';
import style from './UserLIst.module.css';
import UserRow from './UserRow';

const UserList = ({ users }) => {
	const [search, setSearch] = useState('');
	const [onlyActive, setOnlyActive] = useState(false);
	let usersFiltered = filterUsersByName(users, search);
	usersFiltered = filterActiveUsers(usersFiltered, onlyActive);
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
					<input
						type='checkbox'
						checked={onlyActive}
						onChange={ev => setOnlyActive(ev.target.checked)}
					></input>
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

const filterActiveUsers = (users, active) => {
	if (!active) return users;
	return users.filter(user => user.active);
};

const renderUsers = users => {
	if (users.length <= 0) return <p>No hay usuarios</p>;
	return users.map(user => <UserRow key={user.name} {...user} />);
};

export default UserList;
