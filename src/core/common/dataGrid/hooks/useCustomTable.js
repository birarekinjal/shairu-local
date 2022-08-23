/* eslint-disable import/extensions */
import { useRef, useState } from 'react';
import { useFetchData } from "../../../../hooks/useFetchData";

export const useCustomTable = ({ ColumnData }) => {
  const [state, setState] = useState({
    rowData: {},
    pagination: {},
    columnData: ColumnData,
  });

  const { rowData, pagination, columnData } = state;

  // const [state, setState] = useState({
  //   page_size: 10,
  //   page_no: 1,
  //   filter: {},
  //   sortId: '',
  //   sortMethod: '',
  //   refresh: false,
  // });

  // const previousState = useRef(state);

  // const {
  //   refresh, page_size, page_no, sortId, sortMethod
  // } = state || {};

  // const successCallback = () => {
  //   setState({
  //     ...state,

  //   })
  // previousState.current = state;
  //};

  // const errorCallback = () => {
  //   setState({
  //     ...state,
  //     ...(previousState.current || {}),
  //   });
  // };


  const handleEdit = () => {

  };

  const handleDelete = () => {

  };

  const addRecord = () => {

  };

  // const getList = () => {
  //   fetch("https://a9ea-203-88-147-114.in.ngrok.io/company/cabin/")
  //     .then((data) => data.json())
  //     .then((res) => {
  //       // setState({
  //       //   ...state,
  //       //   data: res.payload,
  //       //   pagination: res.pagination,
  //       //   columnData: CabinColumns
  //       // });
  //     });
  // };

  // const [{ data = {}, isLoading }] = useFetchData({
  //   apiFunction: getList,
  //   defaultResponseValue: [],
  //   //dependencyArray: [page_size, page_no, sortId, sortMethod, refresh],
  //   // apiParams: body,
  //   apiCallCondition: true,
  //   successCallback,
  //   errorCallback,
  // });

  // const fetchListCallBack = (listData, shouldResetState) => {
  //   setState({
  //     ...state,
  //     ...(listData || {}),
  //     ...(shouldResetState ? { page_no: 1 } : {}),
  //   });
  // };

  return [{ handleEdit, handleDelete, addRecord }];

};
