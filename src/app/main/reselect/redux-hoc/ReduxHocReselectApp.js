import React from 'react';

import Posts from './Posts';
import PostsByUser from './PostsByUser';
import Counter from './Counter';

//REDUX
import reducers from './store/reducers';
import withReducer from './../../../store/withReducer';

class ReduxHocReselectApp extends React.Component {
	render() {
		return (
			<div className="flex mx-24 flex-col">
				<h1>Reselect Redux</h1>
				<Posts />
				<Counter />

				<h2>User 1</h2>
				<PostsByUser user={'user-1'} />
				<h2>User 2</h2>
				<PostsByUser user={'user-2'} />
				{/* <pre>{JSON.stringify(initial, null, 2)}</pre> */}
			</div>
		);
	}
}

export default withReducer('reduxhoc_reselect', reducers)(ReduxHocReselectApp);
