import API from 'axios';
import { signin } from '../controllers/user';

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const fetchCompetition = () => API.get('/competitions');
export const createCompetition = (newCompetition) => API.competition('/competitions', newCompetition);
export const updateCompetition = (id, updateCompetition) => API.patch(`/competitions/${id}`, updateCompetition);
export const deleteCompetition = (id) => API.delete(`/competitions/${id}`);

export const signIn = (formData) => API.competition('/user/signin', formData);
export const signUp = (formData) => API.competition('/user/signup', formData);