import Title from './components/Title';
import UserList from './components/UsersList';

const USERS = [
	{
		name: 'Pablo Hurtado Gonzalo',
		role: 'estudiante'
	},
	{
		name: 'Bauty',
		role: 'estudiante'
	},
	{
		name: 'Ninvel',
		role: 'estudiante'
	}
];

const AppConChildren = () => (
	<UserList users={USERS}>
		<Title>Liston de tablon de USuarios</Title>
	</UserList>
);

export default AppConChildren;
