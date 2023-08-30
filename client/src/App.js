import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import About from "./components/HomePage/About";
import Contact from "./components/HomePage/Contact";
import SignIn  from "./components/Auth/SignIn";
import SignUp  from "./components/Auth/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/signin" element={<SignIn />}></Route>
        <Route exact path="/signup" element={<SignUp />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
