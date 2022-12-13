import {DARK, LIGHT} from '../constants/actionType';

export const setDarkMode = () => (dispatch) => {
        dispatch({type: DARK});
}

export const setLightMode = () => (dispatch) => {
    dispatch({type: LIGHT});
}