import React from "react";
import { Button, Input, SearchInput, Select, MultiSelect, AsyncSelect, DatePicker } from "../../common";
import { getList } from './dataGridLayout/api'

function ThemeLayout() {
  return (
    <div>
      <Button type="dashed" buttonText="Primary Button" />
      <Input type="password" />
      <Button type="primary" buttonText="Primary Button" tooltip={"Button Title"} />
      <SearchInput />
      <Select
        defaultValue={"test"}
        options={[
          { label: "In Active", value: false },
          { label: "Active", value: true }
        ]}
        showSearch={true}
      />
      <MultiSelect
        defaultValue={['Active']}
        options={[
          { label: "In Active", value: false },
          { label: "Active", value: true }
        ]}
        showSearch={true}
      />

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

      <DatePicker
        type="date"
        picker={'day'}

      />
    </div>
  );
}

export default ThemeLayout;
