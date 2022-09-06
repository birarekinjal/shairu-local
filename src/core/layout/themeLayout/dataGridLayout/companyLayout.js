import React, { useEffect, useState } from 'react';
import DataGrid from '../../../common/dataGrid/dataGrid';
import {
  getList, deleteList, editList, InActive
} from './api';
import { companyColumns } from './config';

function CompanyLayout() {
  return (
    <div>
      Hello ,Kinjal this is the company Page.
      <DataGrid
        //  dataSource={data}
        isDelete
        columns={companyColumns}
        inActiveApiFunctions={InActive}
        apiFunction={getList}
        editList={editList}
        pageSizeOptions={['5', '10', '20', '30']}
        deleteList={deleteList}
      />
    </div>
  );
}

export default CompanyLayout;
