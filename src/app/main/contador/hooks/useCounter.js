import { useState } from 'react';

const useCounter = initCount => {
	const [count, setCount] = useState(initCount);

	const increase = () => setCount(count + 1);
	const decrease = () => setCount(count - 1);

	return [count, increase, decrease];
};

export default useCounter;
