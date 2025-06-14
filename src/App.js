import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import RouterAd from "./routes/AdminRoutes/RoutesAd";
import HeaderComponent from './components/header/header';
import FooterComponent from "./components/footer/footer";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div>
        <HomePage />
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;