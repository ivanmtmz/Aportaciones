import auth from 'app/auth/store/reducers';
import { combineReducers } from 'redux';
import fuse from './fuse';
import contador from './redux-hooks-contador';

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,
		count: contador,
		...asyncReducers
	});

export default createReducer;
