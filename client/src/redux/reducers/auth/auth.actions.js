import axios from 'axios'; 
import setAlert from '../alert/alert.actions';
import AuthActionTypes from './auth.types'; 

// signup 
const signup = ({username, email, password}) => async dispatch =>{
    console.log(username); 
    const config = {
        headers : {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    }
    const body = JSON.stringify({username, email, password});
    console.log(body);
    try {
        const res = await axios.post('/api/users', body, config); 
        console.log(res.data); 
        dispatch({
            type: AuthActionTypes.SIGNUP_SUCCESS, 
            payload: res.data 
        })
        dispatch(setAlert('Login successful'))
    } catch (error) {
        console.error(error); 
        const errors = error.response.data.errors; 
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg)))
        }
        dispatch({
            type: AuthActionTypes.SIGNUP_FAILURE,
        })
    }
}

export default signup; 