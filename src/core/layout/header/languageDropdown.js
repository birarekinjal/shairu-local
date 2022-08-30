import React from "react";
import { useTranslation } from "react-i18next";
import { changeLanguageAction } from "../../../actions/internationalizationAction";
import { Dropdown } from "../../common";

const LanguageDropdown = ({ dispatch }) => {
  const options = ["en-US", "guj"];
  const { t, i18n } = useTranslation();
  let language = i18n.language;
  console.log("la", language, "i18n", i18n);
  const onChangeLanguage = (language = "") => {
    console.log("language", language);

    dispatch(changeLanguageAction(language));
    i18n.changeLanguage(language);
    window.location.reload();
  };
  return (
    <Dropdown
      onChange={onChangeLanguage}
      // defaultValue="English"
      Options={options}
    >
      {options.map((value, index) => {
        return <Options key={index} value={value}></Options>;
      })}
    </Dropdown>
  );
};

export default LanguageDropdown;
