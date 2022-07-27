import style from './UserRow.module.css';
const UserRow = ({ name, active, role }) => (
	<div className={style.user}>
		<div className={style.name}>
			<span>{name}</span>
		</div>
		<div className={style.active}>
			<span>{active}</span>
		</div>
		<div className={style.role}>
			<span>{role}</span>
		</div>
	</div>
);

export default UserRow;
