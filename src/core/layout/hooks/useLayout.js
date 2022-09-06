import React, { useState } from "react";

export default function useLayout() {
  const [state, setState] = useState({
    collapsed: false
  });

  const { collapsed } = state;

  const handleChangeSidebar = () => {
    setState({
      ...state,
      collapsed: !collapsed
    });
  };

  return [{ ...state }, { handleChangeSidebar }];
}
