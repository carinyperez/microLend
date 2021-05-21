import AuthActionTypes from './auth.types'; 

const INITIAL_STATE = {
        user: null 
}; 

const authReducer = (state = INITIAL_STATE, action) => {
        switch(action.type) {
                case AuthActionTypes.SIGNUP_SUCCESS:
                return {
                        ...state,
                        user: action.payload 
                }
                case AuthActionTypes.SIGNUP_FAILURE: 
                return {
                        ...state, 
                        user: null 
                }
                default: 
                return state 
        }
}

export default authReducer; 