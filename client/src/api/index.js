import axios from 'axios';

const url = 'http://localhost:4000/competitions'

export const fetchCompetitions = () => axios.get(url);
export const createCompetition = (competition) => axios.post(url, competition)
