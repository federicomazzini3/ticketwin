import { AUTH } from '../constants/actionType';
import * as api from '../api/index.js';
import { updateWithUser } from './cart';

export const signin = (formData, router, redirect) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    updateWithUser(data.result._id);
    redirect();
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router, redirect) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    updateWithUser(data.result._id);
    redirect();
  } catch (error) {
    console.log(error);
  }
};
