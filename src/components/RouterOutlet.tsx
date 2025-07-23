import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { About } from "../pages/About";

export class RouterOutlet extends React.Component {
  render() {
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    );
  }
}