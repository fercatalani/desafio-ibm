import axios from 'axios';

const api = axios.create({
    baseURL: "http://169.57.99.187:30001",
    headers: { 'content-type': 'application/json' },
})

export default api;