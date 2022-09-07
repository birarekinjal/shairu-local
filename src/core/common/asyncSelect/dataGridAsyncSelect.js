import { Select, Spin } from 'antd';
import React, {
  useEffect, useMemo, useRef, useState
} from 'react';
import debounce from "lodash/debounce";
import { getCommissionDropdownList, getDropdownData } from '../../../actions/dropdownAction';
import { useDispatch, useSelector } from 'react-redux';

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
    storeKey,
    debounceTimeout = 800
  } = props;

  const dispatch = useDispatch();

  // defaultValue={record[dataIndex]}
  // options={staticOptionsValue}
  // validation={validation}
  // editableDefaultValue={editableDefaultValue}
  // apiFunction={apiFunction}

  const state = useSelector((state) => state

  // const [state, setState] = useState({
  //   fetching: false,
  //   options: []
  // });

  // const fetchRef = useRef(0);
  const { fetching, options } = state;

  // const debounceFetcher = useMemo(() => {
  //   const loadOptions = (value) => {
  //     console.log(value, "value");
  //     fetchRef.current += 1;
  //     const fetchId = fetchRef.current;

  //     setState({
  //       ...state,
  //       fetching: true,
  //       options: []
  //     });

  //     getDropdownData(storekeystate, apiFunction, value);
  //     // fetchOptions(value).then((newOptions) => {
  //     //   if (fetchId !== fetchRef.current) {
  //     //     // for fetch callback order
  //     //     return;
  //     //   }

  //     //   const options = [];
  //     //   newOptions?.payload && newOptions?.payload.length > 0 && newOptions?.payload.map((item) => {
  //     //     options.push({ label: item.cabin_name, value: id });
  //     //   });

  //     //   setState({
  //     //     fetching: false,
  //     //     options
  //     //   });
  //     // });
  //   };

  //   return debounce(loadOptions, debounceTimeout);
  // }, [apiFunction, debounceTimeout]);

  useEffect(() => {
    console.log("hiiiii");
    // getCommissionDropdownList('')

    dispatch(getDropdownData(storeKey, apiFunction, ''));
  }, []);

  return (
    <Select
      showSearch
      labelInValue
      filterOption
      // onSearch={debounceFetcher}
      //  notFoundContent={fetching ? <Spin size="small" /> : null}
      // {...props}
      options={[{ label: 'kddd', value: 'ddf' }]}
    />
  );
}

export default DataGridAsyncSelect;
