import React from 'react';

const Cat = ({ mouse }) => {
	return <img src="/assets/images/cat_2.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />;
};

export default Cat;
