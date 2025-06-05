// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from './components/header/header';
import FooterComponent from "./components/footer/footer";
import RouterAd from "./routes/AdminRoutes/RoutesAd";
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route không có layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Route có layout */}
        <Route
          path="/*"
          element={
            <>
              <HeaderComponent />
              <div style={{ marginTop: "80px" }}>
                <RouterAd />
              </div>
              <FooterComponent />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
