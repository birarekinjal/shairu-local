import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
import "./datepicker.less";

function CustomDatePicker(props) {
  const { RangePicker, TimePicker } = DatePicker;
  const {
    onChange,
    showTime,
    picker,
    format,
    type, // type - date | range  | time
    size,
    status,
    defaultValue, // ex - {[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]
    disabled,
    value,
    renderExtraFooter,
    onOk,
    placement
  } = props;

  const customProps = {
    onChange,
    picker, // week | month |quarter |year
    showTime,
    format, // ex - YYYY-MM-DD HH:mm
    onOk,
    size,
    status,
    placement: placement || "bottomRight", // topLeft |topRight |bottomLeft |bottomRight
    defaultValue,
    disabled,
    value,
    renderExtraFooter
  };

  if (type === "date") {
    return <DatePicker {...customProps} />;
  }
  if (type === "range") {
    return (
      <RangePicker
        {...customProps}
        ranges={{
          Today: [moment(), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")]
        }}
      />
    );
  }

  if (type === " time") {
    return <TimePicker {...customProps} />;
  }
}

export default CustomDatePicker;
