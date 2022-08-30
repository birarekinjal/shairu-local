import React from "react";
import { Button } from "../../common";
import Header from "../header/header";

function ThemeLayout() {
  return (
    <div>
      <Button type="dashed" buttonText="Primary Button" />
      <Header />
    </div>
  );
}

export default ThemeLayout;
