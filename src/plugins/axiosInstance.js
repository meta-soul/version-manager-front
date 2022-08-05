import axios from 'axios'
//全局默认配置
axios.defaults.headers.post['Content-Type'] = 'application/json';

const Axios = axios.create({
    baseUrl: process.env.VUE_APP_BASE_URL, //请求后端数据的基本地址，自定义
    timeout: 2500,         //请求超时设置，单位ms
})

export default Axios
