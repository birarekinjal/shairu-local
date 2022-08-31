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
    data: [],
  });

  const { isLoading, isError, data } = state;

  useEffect(() => {
    if (apiCallCondition) {
      setState({
        ...state,
        isLoading: true,
      });
      // apiFunction(apiParams)
      //   .then((res) => {
      //     console.log("hiii+++++++++")
      setState({
        ...state,
        isLoading: false,
        isError: false,
        //data: res.data,
        data: [
          {
            cabin_name: 'Text',
            isActive: true,
            id: 1
          },
          {
            cabin_name: 'Text1',
            isActive: false,
            id: 2
          },
          {
            cabin_name: 'Text2',
            isActive: true,
            id: 3
          }
        ]
      });
      successCallback && successCallback([
        {
          cabin_name: 'Text',
          isActive: true,
          id: 1
        },
        {
          cabin_name: 'Text1',
          isActive: false,
          id: 2
        },
        {
          cabin_name: 'Text2',
          isActive: true,
          id: 3
        }
      ]);
      // if (
      //   res?.ok ||
      //   res?.data?.status === 200 ||
      //   res?.data?.status_code === 200
      // ) {
      //   setState({
      //     ...state,
      //     isLoading: false,
      //     isError: false,
      //     data: res.data,
      //   });
      //   successCallback && successCallback(data);
      //   showSuccessMessage && alert(successMessage || res.data.message);
      // } else {
      //   setState({
      //     ...state,
      //     isLoading: false,
      //     isError: true,
      //     data: {},
      //   });
      // showErrorMessage && alert(errorMessage || res.data.message);
      // })
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
    }
  }, dependencyArray);

  return [{ isLoading, isError, data }];
};

export { useFetchData };
