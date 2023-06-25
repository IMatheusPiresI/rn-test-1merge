import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '72b828205fe20d575b9bdfb06aea07e4';

const apiTMDB = axios.create({
  baseURL: BASE_URL,
});

export { apiTMDB, API_KEY };
