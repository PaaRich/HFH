import { useEffect, useState } from "react";
import client from "../client";

const Policy = () => {
  const [policy, setPolicy] = useState([]);

  useEffect(() => {
    const query2 = `*[_type == "policy"] {
  title,
  slug,
  body,
  publishedAt
}`;

    // Fetch data using GROQ
    client
      .fetch(query2)
      .then((data) => {
        setPolicy(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);


  return <div>
    <div className="flex w-[90%] mx-auto h-dvh">
      <div className="w-[30%] bg-orange-200">Nav</div>
      <div className="w-[70%] bg-green-200 px-5">body</div>
    </div>
    
  </div>;
};

export default Policy;
