import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/About";
import NavBar from "./components/nav/nav-bar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
