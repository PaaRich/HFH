import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Events from "./pages/Events";
import Schedule from "./pages/Schedules";
import Training from "./pages/Training";
import Policy from "./pages/Policy";
import Post from "./components/Post";
//import Posts from "./pages/Posts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<Events />} />
        <Route path="/events/post" element={<Post />} />
        {/* <Route path="meeting" element={<Meeting />} /> */}
        <Route path="schedule" element={<Schedule />} />
        <Route path="training" element={<Training />} />
        <Route path="policy" element={<Policy />} />
      </Route>
    </Routes>
  );
}

export default App;
