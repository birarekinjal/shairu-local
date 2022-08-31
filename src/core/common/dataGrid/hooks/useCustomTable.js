/* eslint-disable import/extensions */
import { useRef, useState } from 'react';
import { useFetchData } from "../../../../hooks/useFetchData";

export const useCustomTable = ({ columnsData, apiFunction, deleteList, form, editList }) => {
  const [state, setState] = useState({
    rowData: [],
    pagination: {},
    columns: columnsData,
    selectedRowKeys: [],
    isDelete: false,
    refresh: false,
    editingKey: '',
    isEditFlag: false,
    body: {
      page_size: 5,
      page: 1,
      ordering: '',
    },
    editData: '',
  });

  const {
    rowData, pagination, columns, selectedRowKeys, isDelete, refresh, body, editingKey, editData, isEditFlag
  } = state;
  const previousState = useRef(state);

  const onSelectChange = (newData) => {
    setState({
      ...state,
      selectedRowKeys: newData,
    });
  };

  const cancelEditable = () => {
    setState({
      ...state,
      editingKey: ''
    })
  };

  const handlePagination = (pagination, filters, sorter, extra) => {
    let order = '';

    if (Object.keys(sorter).length > 2) {
      order = sorter.order === "ascend" ? sorter.columnKey : `-${sorter.columnKey}`
    } else {
      let data = []
      sorter.map((item) => {
        data.push(item.order === "ascend" ? item.columnKey : `-${item.columnKey}`,);
        order = data;
      })
    }
    setState({
      ...state,
      body: {
        page: pagination.current,
        page_size: pagination.pageSize,
        ordering: order.join(','),
      }
    });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleSuccessDelete = () => {
    setState({
      ...state,
      refresh: true
    });
  };


  const handleSuccessEdit = () => {
    setState({
      ...state,
      refresh: !refresh
    })
  }
  const [] = useFetchData({
    apiFunction: editList,
    defaultResponseValue: [],
    dependencyArray: [editData],
    apiParams: editData,
    apiCallCondition: isEditFlag,
    successCallback: handleSuccessEdit,
    // errorCallback,
  });

  const [] = useFetchData({
    apiFunction: deleteList,
    defaultResponseValue: [],
    dependencyArray: [isDelete],
    apiParams: selectedRowKeys,
    apiCallCondition: isDelete,
    successCallback: handleSuccessDelete,
    // errorCallback,
  });

  const deleteRecord = () => {
    setState({
      ...state,
      isDelete: true,
    });
  };

  const getPaginationData = (data) => {
    const {
      current_page, page_size, previous, total_entries, total_pages
    } = data;
    return {
      current: current_page,
      pageSize: page_size,
      defaultPageSize: page_size,
      total: total_entries,
    };
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      console.log(values, "values")
      setState({
        ...state,
        editData: values,
        isEditFlag: true
      })
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  // const save = async (key, record) => {

  //   console.log(key, "key", form.validateFields(), record, "hii")
  //   try {


  //     const row = await form.validateFields();

  //     const newData = [...record];
  //     const index = newData.findIndex((item) => key === item.key);

  //     if (index > -1) {
  //       const item = newData[index];
  //       newData.splice(index, 1, { ...item, ...row });

  //       console.log(newData, "newData")
  //       // setData(newData);
  //       // setEditingKey('');
  //     } else {
  //       console.log(newData, "newData")
  //       // newData.push(row);
  //       // setData(newData);
  //       setEditingKey('');
  //     }
  //     // console.log(rows, "rows")
  //     // console.log(key, "keyyy")
  //     //  const row = await form.validateFields();



  //   } catch (errInfo) {
  //     console.log('Validate Failed:', errInfo);
  //   }
  // };

  const successCallback = (data) => {
    setState({
      ...state,
      rowData: data.payload,
      pagination: getPaginationData(data.pagination)
    });
    previousState.current = state;
  };

  const errorCallback = () => {
    setState({
      ...state,
      ...(previousState.current || {}),
    });
  };

  const handleEdit = (record, columns) => {
    let finalData = {}
    columns && columns.length > 0 && columns.map((item) => {
      finalData[item.key] = item.formEditValue || ''
    })

    console.log(finalData, "finalData")
    form.setFieldsValue({ ...finalData, ...record });
    setState({
      ...state,
      editingKey: record?.id
    })
  }

  const handleDelete = () => {

  };

  const addRecord = (columnData) => {
    const finalRows = {};

    columnData && columnData.length > 0 && columnData.map((item, index) => {
      finalRows[item.dataIndex] = '' || item.addRowDefaultValue;

      setState({
        ...state,
        rowData: [finalRows, ...rowData]
      });
    });
  };



  const [{ data = [], isLoading }] = useFetchData({
    apiFunction,
    defaultResponseValue: [],
    dependencyArray: [null, refresh, body],
    apiParams: body,
    apiCallCondition: true,
    successCallback,
    errorCallback,
  });

  return [{
    ...state,
    rowData,
    rowSelection,
    columns,
    pagination,
    handleEdit,
    handleDelete,
    addRecord,
    onSelectChange,
    deleteRecord,
    handlePagination,
    cancelEditable,
    save
  }];

};
