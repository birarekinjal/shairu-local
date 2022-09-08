import { Col, Divider, Row } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { showError } from "../../../utility/other";
import {
  Button,
  Input,
  SearchInput,
  Select,
  MultiSelect,
  DatePicker,
  Checkbox,
  Radio,
  FileUpload
} from "../../common";
import WithAuthenticationLayout from "./withAuthenticationLayout";

function ThemeLayout() {
  const data = [
    { label: "Checkbox 1", value: "1" },
    { label: "CheckBox 2", value: "2" }
  ];
  const handleChange = (data) => {
    console.log(data, "dattttttttt");
  };

  return (
    <WithAuthenticationLayout>
      <Divider orientation="left" />
      <Row>
        <Col span={4}>
          <Button
            type="primary"
            buttonText="Button Disabled"
            className="btn-disabled"
            disabled
          />
        </Col>
        <Col span={4}>
          <Button
            type="outline"
            buttonText="Button Cancel"
            className="btn-cancel"
          />
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            buttonText="Button Reset"
            className="btn-reset"
          />
        </Col>
        <Col span={4}>
          <Button
            type="outline"
            buttonText="Button Outline"
            className="btn-outline"
          />
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            buttonText="Button Primary"
            className="btn-orange"
          />
        </Col>
      </Row>

      <Divider orientation="left" />
      <Row>
        <Col span={4}>
          <SearchInput />
        </Col>
        <Col span={4}>
          <Select
            defaultValue="test"
            className="datepicker"
            options={[
              { label: "In Active", value: false },
              { label: "Active", value: true }
            ]}
            showSearch
          />
        </Col>
        <Col span={4}>
          <MultiSelect
            defaultValue={["Active"]}
            options={[
              { label: "In Active", value: false },
              { label: "Active", value: true }
            ]}
            showSearch
          />
        </Col>

        <Col span={4}>
          <Input label="First Name" inputType="input" />
        </Col>
      </Row>

      <Divider orientation="left" />
      <Row>
        <Col span={4}>
          <DatePicker type="date" picker="day" />
        </Col>
        <Col span={4}>
          <DatePicker type="date" picker="day" />
        </Col>
        <Col span={4}>
          <button onClick={() => showError("Error")}>
            Click me to check toast
          </button>
        </Col>
        <Col>
          <Checkbox
            text="checkCheckbox"
            type="group"
            checkBoxGroupValue={data}
          />
        </Col>
      </Row>

      <Divider orientation="left" />
      <Row>
        <Col>
          <Checkbox
            text="checkCheckbox"
            type="group"
            checkBoxGroupValue={data}
          />
        </Col>
        <Col>
          <Checkbox
            text="checkCheckbox"
            type="single"
            checkBoxGroupValue={data}
          />
        </Col>
        <Col>
          <Radio text="Radio" type="group" radioGroupValue={data} />
        </Col>
        <Col>
          {/* <AsyncSelect
            // value={value}
            placeholder="Select users"
            fetchOptions={getList}
            onChange={(newValue) => {
              console.log(newValue)
              // setValue(newValue);
            }}
            style={{
              width: "100%"
            }}
          /> */}
        </Col>
      </Row>
      <Divider orientation="left" />
      <Row>
        <FileUpload
          // icon={<UploadOutlined />}
          handleChange={handleChange}
          // buttonText="Click to Upload"
          multiple
          listType="picture-card"
        />
      </Row>
    </WithAuthenticationLayout>
  );
}

export default ThemeLayout;
