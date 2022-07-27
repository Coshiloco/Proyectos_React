import style from './UserRow.module.css';
const UserRow = ({ name, active, role }) => {
	const activeClassname = active ? style.active : style.inactive;
	return (
		<div className={style.user}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<span className={activeClassname}>
					{active ? 'Activo' : 'Inactivo'}
				</span>
			</div>
			<div className={style.role}>
				<span>{role}</span>
			</div>
		</div>
	);
};

export default UserRow;
