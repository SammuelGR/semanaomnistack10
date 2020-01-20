import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.18:3333', // localhost - 10.0.2.2
});

export default api;
