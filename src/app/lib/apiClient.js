import axios from 'axios';

const getBaseURL = () => {
  // Browser'da relative URL kullan
  if (typeof window !== 'undefined') {
    return '/api';
  }
  
  // Server-side için absolute URL
  // Environment variable öncelikli
  if (process.env.NEXT_PUBLIC_API_BASE_URL) {
    return process.env.NEXT_PUBLIC_API_BASE_URL;
  }
  
  // Vercel otomatik URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}/api`;
  }
  
  // Localhost fallback
  return 'http://localhost:3000/api';
};

const instance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

const apiClient = async (url, options = {}) => {
  const { method = 'GET', params, data, headers, ...rest } = options;
  
  try {
    const cleanUrl = url.startsWith('/') ? url : `/${url}`;
    
    const response = await instance.request({
      url: cleanUrl,
      method,
      params,
      data,
      headers,
      ...rest,
    });
    return response;
  } catch (error) {
    console.error(`API request failed for ${url}:`, error);
    throw error;
  }
};

export default apiClient;
