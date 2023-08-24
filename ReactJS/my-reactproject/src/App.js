import React from "react";
import Sidenav from "./pages/Sidemav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Setting from "./pages/Setting";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<Aboutus />}></Route>
          <Route path="/setting" exact element={<Setting />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
