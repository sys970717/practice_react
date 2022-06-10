import axios from 'axios';
import router from 'next/router';

const ApiUtilsTest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    timeout: 10000,
    withCredentials: false
});

ApiUtilsTest.interceptors.response.use(
    (response) => {
        console.log('TEST API - RESPONSE ::: ', response);

        if(response.data.data.accessToken) {
            window.localStorage.setItem('token', response.data.data.accessToken)
        }
    },

    (error) => {
        console.log("TEST API - RESPONSE-error ::: ", error);

        if(error.response.data.code === "UNAUTHORIZED") {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('admininfo');

            router.replace('/signin');
        }

        return Promise.reject(error.response.data);
    }
)

export default ApiUtilsTest;