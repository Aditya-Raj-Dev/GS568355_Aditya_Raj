import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Authentication from "../Authentication/Authentication";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <Authentication>
            <Home />
          </Authentication>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
