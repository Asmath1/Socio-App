import React from "react";
import Login from "./Component/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
