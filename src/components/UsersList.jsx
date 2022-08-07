import { useState } from 'react';
import style from './UserLIst.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';

const UserList = ({ initialUsers, usersNotModifed }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters();

	const BeforeValues = [...usersNotModifed];

	const [users, setUsers] = useState(initialUsers);

	console.log('Value prueba', users);

	const toggleUserActive = userId => {
		const newUsers = [...users];
		const userIndex = newUsers.findIndex(user => user.id === userId);
		if (userIndex === -1) return;
		if (newUsers[userIndex].active === true) {
			newUsers[userIndex].name = `${newUsers[userIndex].name} esta inactivo`;
			newUsers[userIndex].active = !newUsers[userIndex].active;
			newUsers[userIndex].role = 'standby';
		} else if (
			newUsers[userIndex].active === false &&
			newUsers[userIndex].role === BeforeValues[userIndex].role
		) {
			console.log('Entrara');
			newUsers[userIndex].active = true;
		} else if (newUsers[userIndex].active === BeforeValues[userIndex].active) {
			newUsers[userIndex].name = BeforeValues[userIndex].name
			newUsers[userIndex].active = true
			newUsers[userIndex].role = BeforeValues[userIndex].role
		} else {
			newUsers[userIndex].name = BeforeValues[userIndex].name;
			newUsers[userIndex].active = BeforeValues[userIndex].active;
			newUsers[userIndex].role = BeforeValues[userIndex].role;
		}
		setUsers(newUsers);
	};

	let usersFiltered = filterActiveUsers(initialUsers, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className={style.list}>
			<h1>Listado de usuarios</h1>
			<UsersListFilters
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFiltersFunctions}
			/>
			<UsersListRows
				users={usersFiltered}
				toggleUserActive={toggleUserActive}
			/>
		</div>
	);
};

const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 'ByDefault'
	});
	const setSearch = search =>
		setFilters({
			...filters,
			search
		});
	const setOnlyActive = onlyActive => {
		setFilters({
			...filters,
			onlyActive
		});
	};
	const setSortBy = sortBy =>
		setFilters({
			...filters,
			sortBy
		});
	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy
	};
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

export default UserList;
