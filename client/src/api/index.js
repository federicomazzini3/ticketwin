//import { signin } from '../controllers/user';
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


export const fetchCompetitions = () => API.get('/competitions');
export const fetchCompetition = (id) => API.get(`/competitions/${id}`);
export const createCompetition = (newCompetition) => API.post('/competitions', newCompetition);
export const updateCompetition = (id, updateCompetition) => API.patch(`/competitions/${id}`, updateCompetition);
export const deleteCompetition = (id) => API.delete(`/competitions/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);