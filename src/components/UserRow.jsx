import style from './UserRow.module.css';
const UserRow = ({ name, role }) => (
	<div className={style.user}>
		<span className={style.name}>{name}</span>
		<span className={style.role}>{role}</span>
	</div>
);

export default UserRow;
