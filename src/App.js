import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouterAd from "./routes/AdminRoutes/RoutesAd";

// import HeaderComponent from "./components/header/header";
// import FooterComponent from "./components/footer/footer";

import CusLayout from "./components/layout/customer/CusLayout";
import CusRoutes from "./routes/CustomerRoutes/CusRoutes";
function App() {
  return (
    <BrowserRouter>
      {/* <HeaderComponent />
      <div style={{ marginTop: "80px" }}>
        <RouterAd />
      </div>
      <FooterComponent /> */}
      <CusLayout>
        <CusRoutes />
      </CusLayout>
    </BrowserRouter>
  );
}

export default App;
