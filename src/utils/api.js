import axios from 'axios';

const API_BASE_URL = 'https://reqres.in/api';

export const registerUser = async (formData) => {
  return axios.post(`${API_BASE_URL}/register`, formData);
};

export const loginUser = async (formData) => {
  return axios.post(`${API_BASE_URL}/login`, formData);
};
