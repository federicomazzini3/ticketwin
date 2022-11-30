import { combineReducers } from "redux";

import competitions from './competitions'
import auth from './auth'
import mode from './mode'

export const reducers = combineReducers({ competitions, auth, mode});