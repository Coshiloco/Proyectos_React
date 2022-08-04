import style from './UsersListFilters.module.css';
const UsersListFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => (
	<form className={style.form}>
		<input
			type='text'
			value={search}
			onChange={ev => setSearch(ev.target.value)}
		></input>
		<div className={style.active}>
			<input
				type='checkbox'
				checked={onlyActive}
				onChange={ev => setOnlyActive(ev.target.checked)}
			></input>
			<span>Solo activos</span>
		</div>
		<select value={sortBy} onChange={ev => setSortBy(ev.target.value)}>
			<option value={'ByDefault'}>Por defecto</option>
			<option value={'ByName'}>Por nombre</option>
		</select>
	</form>
);

export default UsersListFilters;
