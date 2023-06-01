import axios from 'axios';

const BACKEND_URL = `https://earthquake.usgs.gov/fdsnws/event/1/query`;

export const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
});
