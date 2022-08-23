/* eslint-disable array-callback-return */
import { Button, Table, Tag } from 'antd';
import Column from 'antd/lib/table/Column';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import React from 'react';
import { formatDate } from '../../../utility/date';
import { useCustomTable } from './hooks/useCustomTable';

function DataGrid(props) {
  const { dataSource, columns: ColumnData } = props;

  const [{ handleEdit, handleDelete, addRecord }] = useCustomTable({ ColumnData });

  const handleRenderContent = (item, value) => {

    const {
      tagProps, tags, renderValueProps, renderValueModify
    } = item;

    if (item.valueDisplay === 'multiTag') {
      return `${tags && tags.length > 0 && tags.map((tag) => (
        <Tag color={tagProps.color} key={tag}>
          {value}
        </Tag>
      ))}`;
    }

    if (item.valueDisplay === 'text') {
      return value;
    }

    if (item.valueDisplay === 'date') {
      return formatDate(value);
    }

    if (item.valueDisplay === 'tag') {
      return (
        <Tag color={tagProps.color} key={1}>
          {value}
        </Tag>
      );
    }

    if (renderValueModify) {
      return (
        <a>{renderValueProps[value]}</a>
      );
    }
  };

  const handler = (ColumnData) => ColumnData
    && ColumnData.length > 0
    && ColumnData.map((item, index) => {
      if (!item.children) {
        return (
          <Column
            key={index}
            title={item.title}
            dataIndex={item.dataIndex}
            // key={item.key}
            width={item.width}
            editable={item.editable}
            render={(value) => handleRenderContent(item, value)}
          />
        );
      }
      return (
        <ColumnGroup title={item.title}>
          {handler(item.children)}
        </ColumnGroup>
      );
    });


  return (
    <div>
      <Button color="primary" onClick={() => addRecord()}>
        Add record
      </Button>
      <Table dataSource={dataSource}>
        {handler(ColumnData)}
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <>
              <a onClick={handleEdit}> Edit </a>
              <a onClick={handleDelete}> Delete </a>
            </>
          )}
        />
      </Table>
    </div>
  );
}

export default DataGrid;
