import {combineReducers} from 'redux';
import counterReducer from './counter';
import loginReduder from './login';
import navigationReducer from './navigationReducer';
import tokenReducer from './token';
import userReduder from './user';

const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: loginReduder,
    navigation: navigationReducer,
    token: tokenReducer,
    user: userReduder
})


export default allReducers