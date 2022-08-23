import React, { useEffect, useState } from 'react';
import DataGrid from '../../../common/dataGrid/dataGrid';
import { CabinColumns, nameColumns } from './config';

function DataGridLayout() {

  const [state, setState] = useState({
    columnData: [],
    data: [],
  });

  const { columnData, data } = state;

  const getList = () => {
    fetch("https://a9ea-203-88-147-114.in.ngrok.io/company/cabin/")
      .then((data) => data.json())
      .then((res) => {
        setState({
          ...state,
          data: res.payload,
          pagination: res.pagination,
          columnData: CabinColumns
        });
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <DataGrid
        dataSource={data}
        columns={nameColumns}
      />
    </div>
  );
}

export default DataGridLayout;
