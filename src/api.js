import axios from 'axios';

const config = {
  baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
  timeout: 5000,
  withCredentials: true,
};

const configureAPI = () => {
  const api = axios.create(config);

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === 403) {
      return {data: null};
    }
    return err;
  };
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {config};
export default configureAPI;
