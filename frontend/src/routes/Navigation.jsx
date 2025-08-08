import React from "react";
import { Routes, Route } from "react-router-dom";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
    </Routes>
  );
};
