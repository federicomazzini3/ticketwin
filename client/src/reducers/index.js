import { combineReducers } from "redux";

import competitions from './competitions'
import auth from './auth'

export const reducers = combineReducers({ competitions, auth});

//export default combineReducers({
  //  competitions
//});