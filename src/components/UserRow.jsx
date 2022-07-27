import style from './UserRow.module.css';
const UserRow = ({ name, active, role }) => {
	const activeClassname = active ? style.active : style.inactive;
	//  Posibles tilos de lo que viene siendo los roles
	const ROLES_STYLES = {
		teacher: ['Profesor', style.teacher],
		student: ['Alumno', style.student],
		other: ['Otro', style.other]
	};
	// O alternativa de roll de otro destructuring
	const [roleName, roleClassname] = ROLES_STYLES[role] || ROLES_STYLES.other;
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
				<span className={roleClassname}>{roleName}</span>
			</div>
		</div>
	);
};

export default UserRow;
