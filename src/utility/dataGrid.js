import { Tag } from "antd";

export const colRenderData = (item, value) => {

  const {
    tagProps, tags, renderValueProps, renderValueModify
  } = item || {};

  if (item?.valueDisplay === 'multiTag') {
    return `${tags && tags?.length > 0 && tags?.map((tag, index) => (
      <Tag color={tagProps?.color} key={tag} index={index}>
        {value}
      </Tag>
    ))}`;
  }

  if (item?.valueDisplay === 'text') {
    return value;
  }

  if (item?.valueDisplay === 'date') {
    return formatDate(value);
  }

  if (item?.valueDisplay === 'tag') {
    return (
      <Tag color={tagProps?.color} key={1}>
        {value}
      </Tag>
    );
  }

  if (renderValueModify) {
    return (
      <a>{renderValueProps?.[value]}</a>
    );
  }
};