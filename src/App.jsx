import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Lhims from "./pages/Lhims";
import CPS from "./pages/CPS";
import Xray from "./pages/Xray";
import HomePage from "./pages/HomePage";
import ClaimIT from "./pages/ClaimIT";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="lhims" element={<Lhims />} />
        <Route path="cps" element={<CPS />} />
        <Route path="x-ray" element={<Xray />} />
        <Route path="claimit" element={<ClaimIT />} />
      </Route>
    </Routes>
  );
}

export default App;
