import { useState } from 'react';
import style from './UserLIst.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';

const UserList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters();
	const { name, role, active, setProps} = useUser(initialUsers)
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
			<UsersListRows users={usersFiltered} />
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
const useUser = (initialUsers) => {
	const UserProps = {...initialUsers}
	const [userprops, setUserProps] = useState({
		name: UserProps.name,
		active: UserProps.active,
		
		
	});
	const setProps = (name, role, active) =>
	setUserProps({
			name,
			role,
			active
		});
	return {
		...userprops,
		setProps
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
