import UserRow from './UserRow';

const UsersListRows = ({ users, toggleUserChanges }) => {
	if (!users.length) return <p>No hay usuarios</p>;
	return users.map(user => (
		<UserRow key={user.id} toggleUserChanges={toggleUserChanges} {...user} />
	));
};

export default UsersListRows;
