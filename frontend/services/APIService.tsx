import { AxiosInstance } from "axios";
import axios from "axios";

export const axiosApiInstance: AxiosInstance = axios.create({
   baseURL: "http://localhost:3000/"
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
    async (config: any )=> {
      config.headers = { 
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      }
      return config;
    });

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use((response : any) => {
  return response
}, async function (error :any) {
  if (error.response.status === 401) {
    localStorage.removeItem("token")
    return error.response.status
  }
});
