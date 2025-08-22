import React from "react";
import { LoginAdmin } from "../../pages/admin";
import "./AdminLayout.scss";
export const AdminLayout = ({ children }) => {
  const auth = null;
  if (!auth) return <LoginAdmin />;

  return (
    <div>
      <p>AdminLayout</p>
      {children}
    </div>
  );
};
