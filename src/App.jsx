import React from "react";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import SignUP from "./pages/SignUP";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIN from "./pages/SignIN";
import Home from "./pages/Home";
import { auth } from "./firebase";

const App = () => {
  const user = auth.currentUser;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/signin" element={<SignIN />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
