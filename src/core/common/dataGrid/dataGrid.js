/* eslint-disable array-callback-return */
import {
  Button, Form, Space, Table, Tag, Typography
} from 'antd';
import Column from 'antd/lib/table/Column';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import React from 'react';
import { formatDate } from '../../../utility/date';
import { useCustomTable } from './hooks/useCustomTable';
import EditableCell from '../forms/editable';
import { colRenderData } from '../../../utility/dataGrid';
import { Switch } from '../index';

function DataGrid(props) {
  const [form] = Form.useForm();

  const {
    columns: customColumnData,
    apiFunction,
    isDelete,
    deleteList,
    pageSizeOptions,
    editList,
    inActiveApiFunctions
  } = props || {};

  const [{
    rowData, columns, editingKey, handleEdit, handleInActive, handleDelete, save, addRecord, rowSelection, deleteRecord, handlePagination, pagination, cancelEditable
  }] = useCustomTable({
    columnsData: customColumnData, apiFunction, deleteList, form, editList, inActiveApiFunctions
  });

  const isEditing = (record) => record?.id === editingKey;

  const mergedColumns = columns && columns?.length > 0 && columns?.map((col) => {
    if (!col?.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        col,
        editing: isEditing?.(record),
        // save
      }),
    };
  });

  const handler = (item) => item
    && item?.length > 0
    && item?.map((item, index) => {
      if (!item.children) {
        return (
          <Column
            {...item}
            key={item?.dataIndex}
            title={item?.title}
            inputType={item?.addRowType}
            dataIndex={item?.dataIndex}
            sorter={{
              multiple: index,
              compare: (a, b) => a?.dataIndex - b?.dataIndex,
            }}
            width={item?.width}
            editable={item?.editable}
            render={(value) => colRenderData(item, value)}
          />
        );
      }
      return (
        <ColumnGroup title={item?.title} key={item?.dataIndex}>
          {handler(item?.children)}
        </ColumnGroup>
      );
    });

  return (
    <div>
      <Button color="primary" onClick={() => addRecord(columns)}>
        Add record
      </Button>
      {isDelete
        && (
          <Button color="primary" onClick={() => deleteRecord()}>
            Delete Multi Records
          </Button>
        )}
      <Form form={form} component={false}>
        <Table
          dataSource={rowData}
          pagination={{
            ...pagination,
            position: ['bottom'],
            pageSizeOptions,
            showSizeChanger: true
          }}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          rowClassName="editable-row"
          rowKey="id"
          rowSelection={{
            type: 'Checkbox',
            ...rowSelection,
          }}
          onChange={handlePagination}
        >
          {handler(mergedColumns)}

          <Column
            title="Status"
            key="is_active"
            inputType="switch"
            dataIndex="is_active"
            width={230}
            editable
            render={(_, record) => (
              <Space size="middle">
                <Typography.Link onClick={() => handleInActive(record)}>
                  <Switch defaultChecked={record.is_active} />
                </Typography.Link>
              </Space>
            )}
          />

          <Column
            title="Action"
            key="action"
            render={(_, record) => {
              const editable = isEditing(record);

              return (
                <Space size="middle">
                  {editable
                    ? (
                      <>
                        <Typography.Link
                          onClick={save}
                          style={{
                            marginRight: 8,
                          }}
                        >
                          Save
                        </Typography.Link>
                        <Typography.Link
                          onClick={() => cancelEditable(record?.key)}
                          style={{
                            marginRight: 8,
                          }}
                        >
                          Cancel
                        </Typography.Link>
                      </>
                    )
                    : (
                      <Typography.Link disabled={editingKey !== ''} onClick={() => handleEdit(record)}>
                        Edit
                      </Typography.Link>
                    )}
                </Space>
              );
            }}
          />

        </Table>
      </Form>
    </div>
  );
}

export default DataGrid;
