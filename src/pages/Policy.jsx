import { useEffect, useState } from "react";
import client from "../client";
import { Outlet, Link } from "react-router-dom";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
  TbCircleNumber6Filled,
  TbCircleNumber7Filled,
  TbCircleNumber8Filled,
  TbCircleNumber9Filled
} from "react-icons/tb";
import { IoIosStar } from "react-icons/io";


const Policy = () => {
  // eslint-disable-next-line no-unused-vars
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
    <div className="flex w-full mx-auto h-dvh">

      <div className="w-[30%] bg-[whitesmoke]">
        <div className="flex flex-col policy_links">
          <ul>
            <li><TbCircleNumber1Filled size={27}/><Link to={"Employment and Contractual Terms"}>Employment and Contractual Terms</Link></li>
            <li><TbCircleNumber2Filled size={27}/><Link to={"Compensation and Benefits"}>Compensation and Benefits</Link></li>
            <li><TbCircleNumber3Filled size={27}/><Link to={"Workplace Policies and Code of Conduct"}>Workplace Policies and Code of Conduct</Link></li>
            <li><TbCircleNumber4Filled size={27}/><Link to={"Health and Safety Regulations"}>Health and Safety Regulations</Link></li>
            <li><TbCircleNumber5Filled size={27}/><Link to={"Training and Professional Development"}>Training and Professional Development</Link></li>
            <li><TbCircleNumber6Filled size={27}/><Link to={"Work Schedule and Leave Policies"}>Work Schedule and Leave Policies</Link></li>
            <li><TbCircleNumber7Filled size={27}/><Link to={"Performance Evaluation and Discipline"}>Performance Evaluation and Discipline</Link></li>
            <li><TbCircleNumber8Filled size={27}/><Link to={"Confidentiality and Data Protection"}>Confidentiality and Data Protection</Link></li>
            <li><TbCircleNumber9Filled size={27}/><Link to={"Workplace Diversity and Inclusion"}>Workplace Diversity and Inclusion</Link></li>
            <li><IoIosStar size={27}/><Link to={"Employee Support and Well-being"}>Employee Support and Well-being</Link></li>
          </ul>
        </div>
      </div>

      <div className="w-[70%] px-10">
        <Outlet/>
      </div>
    </div>
    
  </div>;
};

export default Policy;
