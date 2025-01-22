import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Events from "./pages/PostsList";
import Schedule from "./pages/Schedules";
import Training from "./pages/Training";
import Policy from "./pages/Policy";
import Post from "./components/Post";
import VideoPage from "./pages/VideoPage";
//import Posts from "./pages/Posts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<Events />} />
        <Route path="events/*" element={<Post />} />
        {/* <Route path="meeting" element={<Meeting />} /> */}
        <Route path="schedule" element={<Schedule />} />
        <Route path="training" element={<Training />} />
        <Route path="training/*" element={<VideoPage />} />
        <Route path="policy" element={<Policy />} />
        {/* <Route
          path="*"
          element={<h1 className="text-3xl font-bold">Error Handling</h1>}
        /> */}
      </Route>
    </Routes>
  );
}

export default App;
