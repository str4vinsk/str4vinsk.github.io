import MainPage from "./pages/MainPage";
import React from 'react'
import { GlobalStyles } from "./styles/GlobalStyles";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <GlobalStyles />
    </HashRouter>
  );
}

export default App;
