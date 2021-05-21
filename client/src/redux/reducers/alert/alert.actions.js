import AlertActionTypes from './alert.types'; 
import uuid from 'uuidv4'

const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuid; 
    dispatch({
        type: AlertActionTypes.SET_ALERT,
        payload: {msg, alertType, id}
    });
    // remove alert after 5 seconds 
    // needs to know what alert to remove based on id 
    setTimeout(() => dispatch({type: AlertActionTypes.REMOVE_ALERT, payload: id}), timeout)
}

export default setAlert;