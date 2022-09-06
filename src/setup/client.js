import { message } from 'antd';
import axios from 'axios';
import { messages } from '../constants/index';
import { others } from '../utility/index';

const { getBaseURL, getToken, showSuccess } = others;

const client = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const get = (url, body, headers = {}) => client.get(url, { params: body, headers });

const post = (url, body, headers = {}) => client.post(url, body, { headers });

const put = (url, body, headers = {}) => client.put(url, body, { headers });

const patch = (url, body, headers = {}) => client.patch(url, body, { headers });

const del = (url, body) => client.delete(url, body);

const getAuthenticationToken = async () => {
  const authenticationToken = await getToken();
  if (authenticationToken) {
    return `Bearer` + ` ${authenticationToken}`;
  }
  return '';
};

// const getAuthenticationRefreshToken = async () => {
//   const authenticationToken = await getRefreshToken();
//   if (authenticationToken) {
//     return `Bearer` + ` ${authenticationToken}`;
//   }
//   return '';
// };

client.interceptors.request.use(async (config) => {
  const authenticationToken = await getToken();

  if (authenticationToken) {
    config.headers.Authorization = await getAuthenticationToken();
  }
  return config;
}, (error) => Promise.reject(error));

// client.interceptors.response.use(function (response) {
//   console.log(response , response);
//   // Any status code that lie within the range of 2xx cause this function to trigger
//   // Do something with response data
//   return response;
// }, function (error) {
//   console.log(error , "error" , {...error || {}} );
//   // Any status codes that falls outside the range of 2xx cause this function to trigger
//   // Do something with response error
//   return Promise.reject(error);
// });

client.interceptors.response.use(
  (response) => response,
  // console.log(response, 'respnse');
  // console.log(response.status);
  // if (response.data && response.data.data && response.data.data.logout) {
  //   localStorage.removeItem('ACCESS_TOKEN');
  //   localStorage.removeItem('REFRESH_TOKEN');
  //   localStorage.setItem('SHOW_TOAST', 'true');
  // }
  async (error) => {

    // if (error.config && error.response && error.response.status === 401){
    //   let token = await getAuthenticationRefreshToken();
    //   console.log(token , "token");
    //   store.dispatch(refreshToken(await token));

    //    error.config.headers.Authorization = getAuthenticationToken();
    //    return axios.request(error.config);
    // }

    // if (error.status === 409 ) {
    //    localStorage.removeItem('ACCESS_TOKEN');
    //    localStorage.removeItem('REFRESH_TOKEN');
    //    localStorage.setItem('SHOW_TOAST', 'true');  
    // }

    showSuccess(messages.tryAgain);
    return Promise.reject(error);

    // if (error.config && error.response && error.response.status === 401) {
    //   return updateToken().then((token) => {
    //   error.config.headers.xxxx <= set the token
    //   return axios.request(config);
    //   });
    //   }

    //   return Promise.reject(error);
    // });

  },
);

export {
  get, post, put, del, patch
};

export default client;
