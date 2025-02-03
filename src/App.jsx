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
        <Route path="schedule" element={<Schedule />} />
        <Route path="training" element={<Training />} />
        <Route path="training/*" element={<VideoPage />} />

        {/* Policy routing */}
        <Route path="policy" element={<Policy />} >
          <Route index element={<h1>First Element</h1>}/>
          <Route path="Employment and contractual Terms" element={<h1>Employment and contractual Terms</h1>}/>
          <Route path="Compensation and Benefits" element={<h1>Compensation and Benefits</h1>}/>
          <Route path="Workplace Policies and Code of Conduct" element={<h1>Workplace Policies and Code of Conduct</h1>}/>
          <Route path="Health and Safety Regulations" element={<h1>Health and Safety Regulations</h1>}/>
          <Route path="Training and Professional Development" element={<h1>Training and Professional Development</h1>}/>
          <Route path="Work Schedule and Leave Policies" element={<h1>Work Schedule and Leave Policies</h1>}/>
          <Route path="Performance Evaluation and Discipline" element={<h1>Performance Evaluation and Discipline</h1>}/>
          <Route path="Confidentiality and Data Protection" element={<h1>Confidentiality and Data Protection</h1>}/>
          <Route path="Workplace Diversity and Inclusion" element={<h1>Workplace Diversity and Inclusion</h1>}/>
          <Route path="Employee Support and Well-being" element={<h1>Employee Support and Well-being</h1>}/>
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
