import axios from "axios";
import { BASE_URL } from "../../../constants/baseUrls";

export const adminApi = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

adminApi.interceptors.request.use(
  async (config) => {
    const adminToken = localStorage.getItem('adminToken');
  
   
    if (adminToken) {
      config.headers['Authorization'] = `Bearer ${adminToken}`;
    }

    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);