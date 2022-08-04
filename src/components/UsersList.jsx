import { useState } from 'react';
import style from './UserLIst.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';

const UserList = ({ users }) => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 'ByDefault'
	});
	let usersFiltered = filterActiveUsers(users, filters.onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, filters.search);
	usersFiltered = sortUsers(usersFiltered, filters.sortBy);
	return (
		<div className={style.list}>
			<h1>Listado de usuarios</h1>
			<UsersListFilters
				search={filters.search}
				setSearch={search =>
					setFilters({
						...filters,
						search
					})
				}
				onlyActive={filters.onlyActive}
				setOnlyActive={onlyActive =>
					setFilters({
						...filters,
						onlyActive
					})
				}
				sortBy={filters.sortBy}
				setSortBy={sortBy =>
					setFilters({
						...filters,
						sortBy
					})
				}
			/>
			<UsersListRows users={usersFiltered} />
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

export default UserList;
