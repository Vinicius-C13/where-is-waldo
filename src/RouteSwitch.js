import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;