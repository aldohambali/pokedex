import axios from 'axios';

const cache = new Map();
const CACHE_DURATION = 15 * 60 * 1000; // Cache for 15 minutes

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // replace with your base URL
});

axiosInstance.interceptors.request.use((request) => {
  const { url } = request;
  console.log('request ',request)
  const cached = cache.get(url);
  console.log('requestcached ',cached)
  if (cached && (Date.now() - cached.timestamp < CACHE_DURATION)) {
    console.log(`Cache hit for ${url}`);
    request.data = cached.data;
    request.adapter = () => Promise.resolve({ data: request.data, status: 200 });
  } else {
    console.log(`Cache miss for ${url}`);
    cache.delete(url);
  }
  return request;
});

axiosInstance.interceptors.response.use((response) => {
  const { config, data } = response;
  if(config){
    cache.set(config.url, { data, timestamp: Date.now() });
    console.log('cache ',cache)
  }

  return response;
});

export default axiosInstance;


