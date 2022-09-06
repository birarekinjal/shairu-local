import { Select } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { changeLanguageAction } from "../../../actions/internationalizationAction";

function LanguageDropdown() {
  const { Option } = Select;
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleChange = (language = "") => {
    dispatch(changeLanguageAction(language));
    i18n.changeLanguage(language);
  };
  return (
    <Select
      defaultValue={t("header.englishPlaceholder")}
      onChange={handleChange}
    >
      <Option value="en-US">{t("header.englishPlaceholder")}</Option>
      <Option value="guj">{t("header.gujPlaceholder")}</Option>
    </Select>
  );
}

export default LanguageDropdown;
