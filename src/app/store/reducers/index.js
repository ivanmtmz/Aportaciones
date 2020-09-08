import auth from 'app/auth/store/reducers';
import { combineReducers } from 'redux';
import fuse from './fuse';
import contador from './redux-hooks-contador';
import reduxhoc_reselect from './../../main/reselect/redux-hoc/store/reducers';

const createReducer = asyncReducers =>
	combineReducers({
		auth,
		fuse,
		reduxhoc_reselect,
		count: contador,
		...asyncReducers
	});

export default createReducer;
