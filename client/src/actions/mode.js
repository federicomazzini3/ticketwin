import {DARK, LIGHT} from '../constants/actionType';

export const setDarkMode = (dispatch) => {
        dispatch({type: DARK});
        console.log("setDarkMode")
}

export const setLightMode = (dispatch) => {
    dispatch({type: LIGHT});
    console.log("setLightMode")
}