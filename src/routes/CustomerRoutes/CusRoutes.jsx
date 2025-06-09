import { Routes, Route } from "react-router-dom";
import Home from "../../pages/CustomerPage/Home";
import Search from "../../pages/CustomerPage/Search";
import PropertyDetails from "../../pages/CustomerPage/PropertyDetails";
import NotFound from "../../pages/NotFound";

const CusRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default CusRoutes;
