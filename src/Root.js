import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "./App";
import { ContextProvider } from './Context';


const Root = () => {
  return (

    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route exact path="/" element={<App />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default Root