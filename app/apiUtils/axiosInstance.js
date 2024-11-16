// apiUtils/axiosInstance.js
import axios from 'axios';
const apiToken = process.env.COC_API_KEY
const axiosInstance = axios.create({
  baseURL: 'https://api.clashofclans.com/v1', 
  headers: {
    'Authorization': `Bearer ${apiToken}`, 
    'Content-Type': 'application/json',
  },
});
export default axiosInstance;
