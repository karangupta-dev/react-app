import "./App.css";
import NavBar from "./components/nav/Nav-bar";
 
import { RouterOutlet } from "./components/router-outlet/RouterOutlet";

function App() {
  return (
    <>
      <NavBar />
      <RouterOutlet/>
    </>
  );
}

export default App;
