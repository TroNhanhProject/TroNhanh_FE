
import axios from 'axios';

const API_URL = process.env.REACT_APP_API || '/api'; 

export const login = (data) => axios.post(`${API_URL}/auth/login`, data);
export const register = (data) => axios.post(`${API_URL}/auth/register`, data);
