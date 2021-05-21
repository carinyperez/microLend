import {combineReducers} from 'redux'; 
import authReducer from './reducers/auth/auth.reducer';
import alertReducer from './reducers/alert/alert.reducer'

export default combineReducers({
    auth: authReducer,
    alert: alertReducer
})