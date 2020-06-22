import { authAPI } from "../components/api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTHORIZATION = 'SET_AUTHORIZATION';

let initialState = {
    login: null,
    email: null,
    id: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA : {
            return {
                ...state,
                ...action.data,
                // isAuth: true,
            }
        }
        default: 
            return state;
    }
}
export const setUserData = (email, login, id, isAuth) => ({type: SET_USER_DATA, data: {email, login, id, isAuth}}); 
export const setAuthorization = (isAuth) => ({type: SET_AUTHORIZATION, isAuth }); 

export const authMeThunk = () => {
    return (dispatch) => {
        authAPI.authMe().then(data => {
                if(data.resultCode === 0 ) {
                    let {email, login, id} = data.data;
                    dispatch(setUserData(email, login, id, true));
                    // dispatch(setAuthorization(true));
                }
                    
            });
    }
}

export const logInThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.logIn(email, password, rememberMe).then(response => {
            if(response.resultCode === 0) {
                dispatch(authMeThunk());
            }else {
                let action = stopSubmit('login', {_error: response.messages[0] || 'Something Got Wrong'})
                dispatch(action);
            }
        });
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then(responseCode => {
            if(responseCode === 0) {
                dispatch(setUserData(null,null,null, false));
            }
        })
    }
}

export default authReducer;