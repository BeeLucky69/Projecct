import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Router/Routers";
import Header from "./Components/Header";

export default function App() {

  return (
    <BrowserRouter>
      <Header />   
      <Routers />  
    </BrowserRouter>
  );
}