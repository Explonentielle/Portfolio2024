"use client";
import React from "react";
import { AppBg } from "./components/AppBg"
import Header from "./components/Header"
import Container from "./components/Container"


function App() {
  return (
    <div className="app h-full w-full">
      <Header />
      <AppBg />
      <Container />
    </div>
  );
}

export default App
