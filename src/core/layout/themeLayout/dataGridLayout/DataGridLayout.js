import React, { useEffect, useState } from 'react';
import DataGrid from '../../../common/dataGrid/dataGrid';
import { getList, deleteList, editList } from './api';
import { nameColumns } from './config';

function DataGridLayout() {

  // const [state, setState] = useState({
  //   columnData: nameColumns,
  //   data: [],
  // });

  // const { columnData, data } = state;

  return (
    <div>
      <DataGrid
        //  dataSource={data}
        isDelete
        columns={nameColumns}
        apiFunction={getList}
        editList={editList}
        pageSizeOptions={['5', '10', '20', '30']}
        // pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '20', '30'] }}
        deleteList={deleteList}
      // addRowType=[string,options]
      />
    </div>
  );
}

export default DataGridLayout;
