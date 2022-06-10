import axios from 'axios';

const ApiUtils = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    timeout: 10000,
    withCredentials: false
});

ApiUtils.interceptors.request.use(
    function (config) {
        if(window.localStorage.getItem('token')) {
            config.headers!.Authorization = `Bearer ${window.localStorage.getItem('token')}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

ApiUtils.interceptors.response.use(
    function (response) {
        console.log("ApiUtils-response", response);

        if(response.data.data.accessToken) {
            window.localStorage.setItem('token', response.data.data.accessToken);
        }

        return response.data.data;
    },
    async function (error) {
        console.log("ApiUtils-error", error);

        if(error.response.data.code === "UNAUTHORIZED") {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('admininfo');

            window.location.href = `${process.env.NEXT_PUBLIC_DOMAIN}/signin`;
        }

        return Promise.reject(error.response.data);
    }
)

export default ApiUtils;