import React from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const CustomDatePicker = (props) => {
  const { RangePicker } = DatePicker;
  const {
    onChange,
    showTime,
    picker,
    format,
    type,                            //type - date | range  | time
    size,
    status,
    defaultValue,                        //ex - {[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]
    disabled,
    value,
    renderExtraFooter,
    onOk,
    placement
  } = props;

  const customProps = {
    onChange: onChange,
    picker: picker,                 // week | month |quarter |year
    showTime: showTime,
    format: format,                       //ex - YYYY-MM-DD HH:mm
    onOk: onOk,
    size: size,
    status: status,
    placement: placement || "bottomRight",    // topLeft |topRight |bottomLeft |bottomRight
    defaultValue: defaultValue,
    disabled: disabled,
    value: value,
    renderExtraFooter: renderExtraFooter
  }

  if (type === "date") {
    return <DatePicker {...customProps} />
  }
  if (type === "range") {
    return <RangePicker
      {...customProps}
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
    />
  }

  if (type === " time") {
    return <TimePicker {...customProps} />;
  }

};

export default CustomDatePicker;