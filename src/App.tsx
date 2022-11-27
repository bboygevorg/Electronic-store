import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";

import "./scss/style.module.scss";
// import { Products } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
