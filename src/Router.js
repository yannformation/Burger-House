import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import HomePage from "./pages/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
         exact path="/"
         element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
