import axios, { AxiosInstance } from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const instance: AxiosInstance = axios.create({
  baseURL: apiUrl
});

export default instance;
