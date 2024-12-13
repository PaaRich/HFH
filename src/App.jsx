import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Meeting from "./pages/Meeting";
import HomePage from "./pages/HomePage";
import Notification from "./pages/Notificaitons";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="notification" element={<Notification />} />
        <Route path="meeting" element={<Meeting />} />
        <Route path="calendar" element={<Calendar />} />
      </Route>
    </Routes>
  );
}

export default App;
