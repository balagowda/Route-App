import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import About from "./components/HomePage/About";
import Contact from "./components/HomePage/Contact";
import { SignIn } from "./components/Auth/SignIn";
import { SignUp } from "./components/Auth/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/signin" element={<SignIn />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
