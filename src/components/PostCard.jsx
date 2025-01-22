import { Link } from "react-router-dom";
import { format } from "date-fns";
import { FcAlarmClock } from "react-icons/fc";

// eslint-disable-next-line react/prop-types
const Card = ({ slug, source, title, desc, postedDate, data }) => {
  return (
    <Link
      to={slug}
      className="bg-white border-y p-8  block hover:bg-gray-50 duration-100"
      state={data}
    >
      <div className=" text-green-700 font-medium mb-2 text-lg">
        From: <span>{source}</span>
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">{title}</h1>
      <p className="text-gray-800 text-lg">{desc}</p>
      <div className="flex items-center text-gray-400 text-sm mt-4">
        <FcAlarmClock size={22} />
        <span className="ml-2 text-lg">
          {format(new Date(postedDate), "MMMM d, yyyy, HH:mm")}
        </span>
      </div>
    </Link>
  );
};

export default Card;
