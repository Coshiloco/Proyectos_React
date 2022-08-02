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
	</UserList>
);

export default AppConChildren;
