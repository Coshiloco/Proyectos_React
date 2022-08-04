import { useState } from 'react';
import style from './UserLIst.module.css';
import UserRow from './UserRow';
import UsersListFilters from './UsersListFilters';

const UserList = ({ users }) => {
	const [search, setSearch] = useState('');
	const [onlyActive, setOnlyActive] = useState(false);
	const [sortBy, setSortBy] = useState('ByDefault');
	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);
	const usersRendered = renderUsers(usersFiltered);
	return (
		<div className={style.list}>
			<h1>Listado de usuarios</h1>
			<UsersListFilters
				search={search}
				setSearch={setSearch}
				onlyActive={onlyActive}
				setOnlyActive={setOnlyActive}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>
			{usersRendered}
		</div>
	);
};

const filterUsersByName = (users, search) => {
	if (!search) return [...users];
	const lowerCaseSearch = search.toLowerCase();
	return users.filter(user =>
		user.name.toLowerCase().startsWith(lowerCaseSearch)
	);
};

const filterActiveUsers = (users, active) => {
	if (!active) return [...users];
	return users.filter(user => user.active);
};

const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];
	switch (sortBy) {
		case 'ByName':
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		default:
			return sortedUsers;
	}
};

const renderUsers = users => {
	if (users.length <= 0) return <p>No hay usuarios</p>;
	return users.map(user => <UserRow key={user.name} {...user} />);
};

export default UserList;
