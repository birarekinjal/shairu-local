import { message } from "antd";

export const saveToken = async (token, refreshToken) => {
  try {
    await localStorage.setItem('ACCESS_TOKEN', token);
    await localStorage.setItem('REFRESH_TOKEN', refreshToken);
  } catch (e) {
    return e;
  }
};

export const removeToken = async () => {
  try {
    await localStorage.removeItem('ACCESS_TOKEN');
    await localStorage.removeItem('REFRESH_TOKEN');
  } catch (e) {
    return e;
  }
};

export const getBaseURL = () => {
  if (!process.env.REACT_APP_ENV) {
    return process.env.REACT_APP_LOCAL_URL;
  } else if (process.env.REACT_APP_ENV === 'staging') {
    return process.env.REACT_APP_STAGING_URL;
  } else if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_PRODUCTION_URL;
  }
};

export const getToken = async () => {
  try {
    const token = await localStorage.getItem('ACCESS_TOKEN');
    if (token !== null) {
      return token;
    }
  } catch (e) {
    return e;
  }
};

export const showError = (messageData, time = 10) => {
  message.error({
    content: messageData,
    className: 'show-error',
    style: {
      marginTop: '20vh',
    },
    time
  });
};

export const showWarning = (messageData, time = 10) => {
  message.warning({
    content: messageData,
    className: 'show-warning',
    style: {
      marginTop: '20vh',
    },
    time
  });
};

export const showSuccess = (messageData, time = 10) => {
  message.success({
    content: messageData,
    className: 'show-success',
    style: {
      marginTop: '20vh',
    },
    time
  });
};
