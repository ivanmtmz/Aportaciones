import React from 'react';
//MATERIAL UI
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const SRP = () => {
	const arrayUsers = [
		{ id: 0, name: 'Jim', lastname: 'Smith', age: 33 },
		{ id: 1, name: 'Carlos', lastname: 'Montesinos', age: 24 },
		{ id: 2, name: 'Ernesto', lastname: 'Mendoza', age: 45 }
	];

	const [users, setUsers] = React.useState([]);

	React.useEffect(() => {
		setUsers(arrayUsers);
	}, []);

	const onHandleChange = id => evt => {
		const { name, value } = evt.target;
		setUsers(prevState =>
			prevState.reduce((acc, current) => {
				console.log(acc, current);
				if (current.id === id) return [...acc, { ...current, [name]: value }];
				else return [...acc, current];
			}, [])
		);
	};

	return (
		<div>
			<AppBar className="static">
				<Toolbar color="inherit">
					<IconButton color="inherit">
						<Menu />
					</IconButton>
					<Typography className="ml-16" variant="h6">
						MyApp
					</Typography>
				</Toolbar>
			</AppBar>
			<div className="flex justify-center items-center h-full">
				<table>
					<thead>
						<tr>
							<th>First name</th>
							<th>Last name</th>
							<th>Age</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={index}>
								<td>
									<input name="name" value={user.name} onChange={onHandleChange(user.id)} />
								</td>
								<td>
									<input name="lastname" value={user.lastname} onChange={onHandleChange(user.id)} />
								</td>
								<td>
									<input name="age" value={user.age} onChange={onHandleChange(user.id)} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default SRP;
