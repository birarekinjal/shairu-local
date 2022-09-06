import { Select, Spin } from 'antd';
import React, { useMemo, useRef, useState } from 'react';
import debounce from "lodash/debounce";

function DataGridAsyncSelect(props) {
  const {
    defaultValue,
    validation,
    placeholder,
    value,
    fetchOptions,
    onChange,
    style,
    editableDefaultValue,
    apiFunction,
    debounceTimeout = 800
  } = props;

  // defaultValue={record[dataIndex]}
  // options={staticOptionsValue}
  // validation={validation}
  // editableDefaultValue={editableDefaultValue}
  // apiFunction={apiFunction}

  const [state, setState] = useState({
    fetching: false,
    options: []
  });

  const fetchRef = useRef(0);
  const { fetching, options } = state;

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;

      setState({
        ...state,
        fetching: true,
        options: []
      });
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        const options = [];
        newOptions?.payload && newOptions?.payload.length > 0 && newOptions?.payload.map((item) => {
          options.push({ label: item.cabin_name, value: id });
        });

        setState({
          fetching: false,
          options
        });
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
      showSearch
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

export default DataGridAsyncSelect;
