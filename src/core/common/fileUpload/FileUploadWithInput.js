import React from "react";
import { Input } from "antd";

function FileUploadWithInput(props) {
  const { handleFileUpload, className, label } = props;
  return (
    <>
      <Input
        type="file"
        accept=".csv,.xlsx,.xls,.pdf"
        onChange={handleFileUpload}
        className={className}
        label={label}
      />
    </>
  );
}

export default FileUploadWithInput;
