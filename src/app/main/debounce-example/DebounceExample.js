import React, { useState } from 'react';

//HOOKS
import useDebounce from './hooks/useDebounce';

//FORMSY
import Formsy from 'formsy-react';
import { TextFieldFormsy } from '@fuse/core/formsy';
import { Typography } from '@material-ui/core';

const DebounceExample = () => {
	const [valueToDebounce, setValueToDebounce] = useState('');
	const debounceValue = useDebounce(valueToDebounce, 500);

	//HANDLERS
	const handleOnChange = evt => {
		setValueToDebounce(evt.target.value);
	};

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
			<Typography className="flex justify-center m-16 text-14">{`Valor normal: ${valueToDebounce}`}</Typography>
			<Typography className="flex justify-center m-16 text-14">{`Valor debounce: ${debounceValue}`}</Typography>
		</Formsy>
	);
};

export default DebounceExample;
