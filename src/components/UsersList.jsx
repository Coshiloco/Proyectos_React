import style from './UserLIst.module.css';
import UserRow from './UserRow';

const UserList = ({ users, children }) => {
	const usersRendered =
		users.length > 0 ? (
			users.map(user => <UserRow key={user.name} {...user} />)
		) : (
			<p>No hay USuarios</p>
		);
	return (
		<div className={style.list}>
			{children}
			{usersRendered}
		</div>
	);
};

export default UserList;
