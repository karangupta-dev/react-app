import "./App.css";
 
import NavBar from "./components/nav/nav-bar";
import { RouterOutlet } from "./components/RouterOutlet";

function App() {
  return (
    <>
      <NavBar />
      <RouterOutlet/>
    </>
  );
}

export default App;
