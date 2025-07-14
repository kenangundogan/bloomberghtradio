import axios from 'axios';

const getBaseURL = () => {
  // Server-side rendering için absolute URL kullan
  if (typeof window === 'undefined') {
    // Genel API base URL - tüm platformlar için
    return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';
  }
  
  // Client-side için relative URL kullan
  return '/api';
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
    // URL'nin doğru formatlandığından emin ol
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
