import { combineReducers } from "redux";

import competitions from './competitions'
import auth from './auth'
import mode from './mode'
import cart from './cart'

export const reducers = combineReducers({ competitions, auth, mode, cart});