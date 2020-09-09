import React from 'react';

import { useSelector, shallowEqual } from 'react-redux';

let count = 0;

const Posts = props => {
	console.log(`Posts render ${++count}`);
	//REDUX VARIABLES
	const postsById = useSelector(state => state.redux_hooks_reselect.postsById, shallowEqual);
	const usersById = useSelector(state => state.redux_hooks_reselect.usersById, shallowEqual);
	const postListing = useSelector(state => state.redux_hooks_reselect.postListing, shallowEqual);
	const posts = postListing.map(id => {
		const post = postsById[id];
		return { ...post, user: usersById[post.author] };
	});

	return (
		<div>
			<h3>Posts</h3>
			<ul>
				{posts.map(x => (
					<li key={x.id}>{`${x.title} - ${x.user.first} ${x.user.last}`}</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;
