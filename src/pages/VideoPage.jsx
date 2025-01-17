import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import video from "../assets/React Native Tutorial - 1 - Introduction.mp4";
import { IoBookmarksOutline } from "react-icons/io5";

const VideoPage = () => {
  const location1 = useLocation();
  const videoData = location1.state;
  const navigate = useNavigate();
  return (
    <div className=" py-10 relative">
      <div
        onClick={() => navigate(-1)}
        className="absolute top-10 left-10 cursor-pointer p-3 border-2 hover:bg-gray-300 rounded-full duration-200"
      >
        <FaArrowLeft size={25} />
      </div>

      <div className="w-[60%] mx-auto">
        <video controls height="100%" width="100%">
          {/* <source src={videoData.asset} type="video/mp4" /> */}
          <source src={video} type="video/mp4" />
        </video>
        <div className="flex items-center gap-x-2 mt-2">
          <IoBookmarksOutline size={25} />
          <h1 className="text-2xl font-semibold">{videoData.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
