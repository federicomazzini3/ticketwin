import {DARK, LIGHT} from '../constants/actionType';

export default (state = {mode: 'light'}, action) => {
    switch (action.type) {
        case DARK:
            return {mode:'dark'};
        case LIGHT:
            return {mode:'light'};
        default:
            return state;
    }
}