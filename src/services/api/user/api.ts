import axios, { AxiosError } from 'axios';
import { store } from '../../../utils/context/store';
import { logout, updateToken } from '../../../utils/context/reducers/authSlice';
import { BASE_URL } from "../../../constants/baseUrls";

export const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {



    const authToken = localStorage.getItem('userToken');
       
    if (authToken) {
     
    config.headers['Authorization'] = `Bearer ${authToken}`;
    }


    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response:any) => response,
  async (error: AxiosError|any) => {
    const originalRequest = error.config;


    if (error.response?.status === 401 && error.response.data?.message === 'Token expired') {
   
      const refreshToken = localStorage.getItem('userRefreshToken');

      try {
   
        const refreshResponse = await api.post('/refresh-token', { refreshToken });
      
       
        store.dispatch(updateToken(refreshResponse.data));
        localStorage.setItem('userToken', refreshResponse.data.accessToken);

  
        originalRequest.headers['Authorization'] = `Bearer ${refreshResponse.data.accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {

        console.error('Refresh token failed:', refreshError);
        store.dispatch(logout()); 

        throw refreshError;
      }
    }

    return Promise.reject(error);
  }
);


