import { useLocation, useNavigate } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../services/sanityUtil";
import { format } from "date-fns";
import { FaArrowLeft } from "react-icons/fa";

const Post = () => {
  const location = useLocation();
  const data = location.state;

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
        {/* head */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-5">{data.title}</h1>
          {/* source */}

          <div className="flex items-end gap-x-4">
            <img
              className="w-12 rounded-full"
              src={urlFor(data.author.image).url()}
              alt={data.author.name}
            />
            <div className="flex flex-col">
              <p className="text-[19px] text-green-700">
                From: <span>{data.author.name}</span>
              </p>
              <p className="text-sm text-gray-500">
                Published on:{" "}
                <span>
                  {format(new Date(data.publishedAt), "MMMM d, yyyy, HH:mm")}
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* body */}
        <div className="text-2xl font-roboto tracking-wide ">
          <PortableText value={data.body} />
        </div>
      </div>
      {/* <p>{data.publishedAt}</p>
      <p>{data.slug.current}</p>
      <p>{data.title}</p> */}
    </div>
  );
};

export default Post;
