//import { signin } from '../controllers/user';
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });


export const fetchCompetitions = (page) => API.get(`/competitions?page=${page}`);
export const fetchCompetitionsBySearch = (searchQuery, page) => API.get(`/competitions/search?searchQuery=${searchQuery || 'none'}&page=${page}`);
export const fetchCompetition = (id) => API.get(`/competitions/${id}`);
export const createCompetition = (newCompetition) => API.post('/competitions', newCompetition);
export const updateCompetition = (id, updateCompetition) => API.patch(`/competitions/${id}`, updateCompetition);
export const deleteCompetition = (id) => API.delete(`/competitions/${id}`);
export const buyTicket = (id, ticket) => API.post(`/competitions/${id}/buy`, ticket)

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);