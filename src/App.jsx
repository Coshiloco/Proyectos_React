import Title from './components/Title';
import UserList from './components/UsersList';

const USERS = [
	{
		name: 'Pablo Hurtado Gonzalo',
		active: true,
		role: 'estudiante'
	},
	{
		name: 'Bauty',
		active: true,
		role: 'estudiante'
	},
	{
		name: 'Ninvel',
		active: false,
		role: 'estudiante'
	}
];

const AppConChildren = () => (
	<UserList users={USERS}>
		<Title>Liston de tablon de USuarios</Title>
	</UserList>
);

export default AppConChildren;
