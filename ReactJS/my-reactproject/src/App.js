//Shortcut of reactjs: rfc
import React from "react";
import Sidenav from "./components/Sidenav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Setting from "./pages/Setting";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<Aboutus />}></Route>
          <Route path="/analysis" exact element={<Analysis />}></Route>
          <Route path="/setting" exact element={<Setting />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
