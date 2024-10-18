import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <div className="App">
        <p>This is the 12films12months site</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
