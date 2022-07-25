import UserRow from './UserRow';

const UserList = ({ users, children }) => {
	const usersRendered = users.map(user => (
		<UserRow key={user.name} {...user} />
	));
	return (
		<div className='list'>
			{children}
			{usersRendered}
		</div>
	);
};

export default UserList;