import { useState } from 'react';
import style from './UserLIst.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';

const UserList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters();
	const [users, setUsers] = useState(initialUsers);
	console.log('users ', users);
	const toggleUserActive = userId => {
		const userIndex = users.findIndex(user => user.id === userId);
		const NewUSerstoMutated = { ...users[userIndex] };
		if (userIndex === -1) return;
		if (NewUSerstoMutated.active === true) {
			// console.log('Entrando en if true');
			NewUSerstoMutated.name = `${users[userIndex].name} esta inactivo`;
			NewUSerstoMutated.active = !users[userIndex].active;
			NewUSerstoMutated.role = 'standby';
		} else if (
			NewUSerstoMutated.active === false &&
			NewUSerstoMutated.role === users[userIndex].role
		) {
			// console.log('Entrara');
			NewUSerstoMutated.active = true;
		} else if (NewUSerstoMutated.active === users[userIndex].active) {
			// console.log('caso a resolver condicion');
			NewUSerstoMutated.name = users[userIndex].name;
			NewUSerstoMutated.active = true;
			NewUSerstoMutated.role = users[userIndex].role;
		} else {
			// console.log('caso del else');
			NewUSerstoMutated.name = users[userIndex].name;
			NewUSerstoMutated.active = users[userIndex].active;
			NewUSerstoMutated.role = users[userIndex].role;
		}
		const CopyOfUSers = [...users];
		CopyOfUSers.splice(userIndex, 1, NewUSerstoMutated);
		console.log('CopyUsers ', CopyOfUSers)
		setUsers(CopyOfUSers);
	};

	let usersFiltered = filterActiveUsers(users, onlyActive);
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
