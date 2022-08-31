import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { changeLanguageAction } from "../../../actions/internationalizationAction";
import { Select } from "../../common";

function LanguageDropdown() {

  const options = [{ label: "en-US", value: 'en-US' }, { label: "guj", value: 'gujarati' }];
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const dispatch = useDispatch();

  const onChangeLanguage = (language = "") => {

    dispatch(changeLanguageAction(language));
    i18n.changeLanguage(language);
    window.location.reload();
  };
  return (
    <Select
      options={options}
      onChange={onChangeLanguage}
    />
    // <Dropdown
    //   onChange={onChangeLanguage}
    //   // defaultValue="English"
    //   Options={options}
    // >
    //   {options.map((value, index) => <Options key={index} value={value} />)}
    // </Dropdown>
  );
}

export default LanguageDropdown;
