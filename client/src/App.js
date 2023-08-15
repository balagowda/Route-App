import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import About from "./components/HomePage/About";
import Contact from "./components/HomePage/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
