import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
	const [count, setCount] = useState(0);

	// Схожее действие как у componentDidMount и componentDidUpdate:
	useEffect(() => {
		// обновляем заголовок окна в браузере, используя browser API
		document.title = `You clicked ${count} times`;
	}, [count]);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
};

export { UseEffectExample };
