import { useEffect, useState } from 'react';
import style from './UserLIst.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';

const UserList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters();
	const [users, setUsers] = useState(initialUsers);

	const toggleUserChanges = userId => {
		const userIndex = users.findIndex(user => user.id === userId);
		const newUser = { ...users[userIndex] };
		if (userIndex === -1) return;
		if (newUser.active === true) {
			// console.log('Entrando en if true');
			newUser.active = false;
			newUser.name = `${initialUsers[userIndex].name} esta inactivo`;
			newUser.role = 'standby';
		} else {
			// console.log('caso del else');
			newUser.active = true;
			newUser.name = initialUsers[userIndex].name;
			newUser.role = initialUsers[userIndex].role;
		}
		const CopyOfUsers = [...users];
		CopyOfUsers.splice(userIndex, 1, newUser);
		console.log('CopyUsers ', CopyOfUsers);
		setUsers(CopyOfUsers);
	};

	useEffect(() => {
		const newUsers = initialUsers.map(user => {
			if (user.active) return user;
			return {
				...user,
				role: 'standby',
				name: `${user.name} esta inactivo`
			};
		});

		setUsers(newUsers);
	}, [initialUsers]);

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
				toggleUserChanges={toggleUserChanges}
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
