import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost',
    withCredentials: true,
    withXSRFToken: true,
});

instance.defaults.xsrfCookieName = 'XSRF-TOKEN';
instance.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';

export default instance;