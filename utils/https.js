import axios from "axios";
import getRsaCode from './getRsaCode';

// axios.defaults.baseURL = '/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.common['WWW-Authenticate'] = true;
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // if (!config.headers['IDEReq']) {
    config.headers['IDEReq'] = getRsaCode('WeFromWhereWeFrom');
    // }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default axios