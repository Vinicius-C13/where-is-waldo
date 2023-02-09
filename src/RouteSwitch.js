import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import ScoreboardPage from "./components/ScoreboardPage";
import Header from './components/Header';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/scoreboard" element={<ScoreboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;