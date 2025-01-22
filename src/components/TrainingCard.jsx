/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { urlFor } from "../services/sanityUtil";
import { format } from "date-fns";

const VideoCard = ({
  thumbnail,
  title,
  author,
  publishedAt,
  authorImg,
  path,
  data1,
}) => {
  return (
    <Link
      to={path}
      className="max-w-[341px] flex flex-col bg-white hover:scale-105 shadow-lg rounded-lg border-2 duration-300"
      state={data1}
    >
      <div className="w-[340px] h-[192px]">
        <img
          className="rounded-t-lg h-auto w-fit object-cover"
          src={urlFor(thumbnail).url()}
          alt="author"
        />
        {/* <img src={thumbnail} alt="img" className="rounded-t-lg" /> */}
      </div>
      <div className="flex items-start gap-x-3 px-3 py-5">
        {/* source */}
        <img
          src={urlFor(authorImg).url()}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        {/* other */}
        <div className="flex flex-col items-start">
          <p className="text-black text-xl font-bold">{title}</p>
          <div className="text-gray-600">
            <p className="text-lg">{author}</p>
            <p className="text-sm">
              {format(new Date(publishedAt), "MMMM d, yyyy, HH:mm")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
