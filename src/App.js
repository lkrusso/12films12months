import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import FilmList from "./components/FilmList/FilmList";
import "./App.scss";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <FilmList />
    </BrowserRouter>
  );
}

export default App;
