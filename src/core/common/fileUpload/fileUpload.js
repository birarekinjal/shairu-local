import React from 'react';
import { Button, message, Upload } from 'antd';

function FileUpload(props) {
  const {
    icon,
    buttonText,
    handleChange,
    multiple,
    directory,
    acceptFileType,
    listType,
    previewFile,
    name,
    className,
    showUploadList
  } = props;

  const beforeUpload = (file) => {

    const isValid = acceptFileType.include(file?.type);
    if (!isValid) {
      message.error(`${file.name} is not a valid file`);
    }
    return isValid || Upload.LIST_IGNORE;
  };

  return (

    <Upload
      name={name}
      className={className}
      onChange={handleChange}
      progress={{
        strokeColor: {
          '0%': '#108ee9',
          '100%': '#87d068',
        },
        strokeWidth: 3,
        format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
      }}
      showUploadList={showUploadList}
      multiple={multiple}
      directory={directory}
      beforeUpload={beforeUpload}
      listType={listType || 'picture'} // picture | picture-card
      previewFile={previewFile}
    >
      <Button icon={icon}>{buttonText}</Button>
    </Upload>

  );
}

export default FileUpload;
