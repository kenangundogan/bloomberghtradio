import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

const apiClient = async (url, options = {}) => {
    console.log(url, options);
    const { method = 'GET', params, data, headers, ...rest } = options;
    try {
        const response = await instance.request({
            url,
            method,
            params,
            data,
            headers,
            ...rest,
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export default apiClient;
