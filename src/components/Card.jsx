import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ source, title, description }) => {
  const currentDate = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: undefined, // Seconds are excluded
    hour12: false, // 24-hour format; set to `true` for 12-hour format
  };

  const formattedDate = currentDate
    .toLocaleString("en-US", options)
    .replace(/:\d{2}\s/, ""); // Remove seconds if included // Example: 12/31/2024, 14:45

  return (
    <Link
      to="post"
      className="bg-white border-y p-10 lg:w-[60%] block hover:bg-gray-50 duration-100"
    >
      <div className=" text-green-700 font-medium mb-2">
        From <span>{source}</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-1">{title}</h1>
      <p className="text-gray-700 text-xl">{description}</p>
      <div className="flex items-center text-gray-500 text-sm mt-4">
        <span className="mr-4">{formattedDate}</span>
      </div>
    </Link>
  );
};

export default Card;
