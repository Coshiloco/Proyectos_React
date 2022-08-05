import UserRow from "./UserRow";

const UsersListRows = ({users, 	name,
	role,
	active,
	setOnlyActive,
	sortBy,
	setSortBy}) => {
	if (users.length <= 0) return <p>No hay usuarios</p>;
	return users.map(user => <UserRow key={user.name} {...user} />);
};

export default UsersListRows