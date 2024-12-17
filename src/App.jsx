import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Events from "./pages/Events";
import Schedule from "./pages/Schedules";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<Events />} />
        {/* <Route path="meeting" element={<Meeting />} /> */}
        <Route path="schedule" element={<Schedule />} />
      </Route>
    </Routes>
  );
}

export default App;
