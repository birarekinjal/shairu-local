import { useEffect, useState } from 'react';

const useFetchData = ({
  apiFunction,
  apiParams,
  showErrorMessage,
  errorMessage,
  showSuccessMessage,
  successMessage,
  dependencyArray,
  apiCallCondition,
  successCallback,
  errorCallback,
}) => {

  const [state, setState] = useState({
    isLoading: false,
    isError: false,
    data: {},
  });

  const { isLoading, isError, data } = state;

  useEffect(() => {
    if (apiCallCondition) {
      setState({
        ...state,
        isLoading: true,
      });
      apiFunction(apiParams)
        .then((res) => {
          if (
            res?.ok ||
            res?.data?.status === 200 ||
            res?.status_code === 200
          ) {
            setState({
              ...state,
              isLoading: false,
              isError: false,
              data: res.payload,
            });
            successCallback && successCallback(res);
            showSuccessMessage && alert(successMessage || res.data.message);
          } else {
            setState({
              ...state,
              isLoading: false,
              isError: true,
              data: {},
            });
            // showErrorMessage && alert(errorMessage || res.data.message);
          }
        })
        .catch((error) => {
          setState({ ...state, isLoading: false, isError: true, data: {} });
          // showErrorMessage &&
          //   alert(errorMessage || error.response.data.message);
          // errorCallback && errorCallback(error.response.data);
        });
    }
  }, dependencyArray);

  return [{ isLoading, isError, data }];
};

export { useFetchData };
