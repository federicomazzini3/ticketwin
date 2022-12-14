import { AUTH, FETCH_USER } from '../constants/actionType';
import * as api from '../api/index.js';
import { updateWithUser } from './cart';

export const signin = (formData, redirect) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    updateWithUser(data.result._id);
    redirect();
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, redirect) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    updateWithUser(data.result._id);
    redirect();
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (id) => async (dispatch) => {
  try{
      const { data } = await api.fetchUser(id);
      dispatch({type: FETCH_USER, data});
  } catch (err) {
      console.log(err.message)
  }
}
