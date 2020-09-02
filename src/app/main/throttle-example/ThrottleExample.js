import React, { useState } from 'react';

//HOOKS
import useThrottle from './hooks/useThrottle';

//FORMSY
import Formsy from 'formsy-react';
import { TextFieldFormsy } from '@fuse/core/formsy';
import { Typography } from '@material-ui/core';

const ThrottleExample = () => {
	const [valueToThrottle, setValueToThrottle] = useState('');
	const throttledValue = useThrottle(valueToThrottle, 500);

	//HANDLERS
	const handleOnChange = evt => {
		setValueToThrottle(evt.target.value);
	};

	console.log(throttledValue);

	return (
		<Formsy className="flex w-full flex-col justify-center m-16">
			<div className="flex w-full justify-center">
				<TextFieldFormsy
					type="text"
					name="name"
					label="Name"
					variant="outlined"
					onChange={handleOnChange}
					required
				/>
			</div>
			<Typography className="flex justify-center m-16 text-14">{`Valor normal: ${valueToThrottle}`}</Typography>
			<Typography className="flex justify-center m-16 text-14">{`Valor throttle: ${throttledValue}`}</Typography>
		</Formsy>
	);
};

export default ThrottleExample;
