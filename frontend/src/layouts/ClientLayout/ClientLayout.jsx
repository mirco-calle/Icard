import React from "react";
import "./ClientLayout.scss";

export const ClientLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <p>componente ClientLayout</p>
      {children}
    </div>
  );
};
