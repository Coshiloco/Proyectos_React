import UserList from './components/UsersList';

const USERS = [
	{
		name: 'Pablo Hurtado Gonzalo',
		active: true,
		role: 'teacher'
	},
	{
		name: 'Bauty',
		active: true,
		role: 'student'
	},
	{
		name: 'Ninvel',
		active: false,
		role: 'other'
	},
	{
		name: 'Fabio',
		active: true,
		role: 'teacher'
	}
];

const AppConChildren = () => (
	<UserList users={USERS}>
		<h1>Liston de tablon de USuarios</h1>
	</UserList>
);

export default AppConChildren;
