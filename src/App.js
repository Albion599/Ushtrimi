import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected the import statement
import SneakPage from "./Pages/SneakPeak/SneakPeak";
import ShopAll from "./Pages/ShopAll/ShopAll";
import SinglePage from "./Pages/SinglePage/SinglePage";
import Products from "./Context/Products";
import PrivateRoute from "./Utils/PrivateRoute";
import { checkUser } from "./Utils/functions";

function App() {
  return (
    <Router>
      <Products>
        <Routes>
          <Route path="/" element={<SneakPage />} />
          <Route path="/shopall" element={<ShopAll />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute secretkey={checkUser()}>
                <h1>dashboard</h1>
              </PrivateRoute>
            }
          />

          <Route path="/singlepage/:productId" element={<SinglePage />} />
        </Routes>
      </Products>
    </Router>
  );
}

export default App;
