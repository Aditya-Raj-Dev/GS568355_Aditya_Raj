import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Authentication from "../Authentication/Authentication";
import Sku from "../Pages/Sku";
import Planning from "../Pages/Planning";
import Charts from "../Pages/Charts";
import StoreGrid from "../Pages/Store";
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
      <Route
        path="/store"
        element={
          <Authentication>
            <StoreGrid />
          </Authentication>
        }
      />
      <Route
        path="/sku"
        element={
          <Authentication>
            <Sku />
          </Authentication>
        }
      />
      <Route
        path="/planning"
        element={
          <Authentication>
            <Planning />
          </Authentication>
        }
      />
      <Route
        path="/charts"
        element={
          <Authentication>
            <Charts/>
          </Authentication>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
