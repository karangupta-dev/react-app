import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../../pages/About";
import { Home } from "../../pages/Home";

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