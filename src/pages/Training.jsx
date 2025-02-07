
import VideoCard from "../components/TrainingCard";
import client from "../client";
import { useState, useEffect } from "react";
import Loader from "../components/Loader"
import AutoComplete from "../components/SearchAutocomplete"
import ErrorMessage from "../components/ErrorMessage";
//import { useState } from 'react';
import { useNavigate } from "react-router-dom";
//import ErrorPage from "./ErrorPage";

const Training = () => {
  const [training, setTraining] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  

    // Fetch data using GROQ
  useEffect(() => {
        const videoQuery = `*[_type == "training"]{
  _id,
  title,
  author->{
    name,
    image
  },
  videoFile,
  thumbnail{
    asset->{
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  slug,
  PublishedAt
}
`;
      // Function to fetch data
      const fetchData = async () => {
        try {
          const response = await client.fetch(videoQuery);
          console.log(response)
          // if (!response) {
          //   throw new Error('Network response was not ok');
          // }
          // const result = await response.json();
          console.log(response)
          setTraining(response);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
    }
    fetchData();
  }, [])
  
  if (loading) {
    return (<div className="lg:max-w-[90%] mx-auto mt-24 py-10 grid gap-y-10 grid-cols-[repeat(auto-fit,minmax(312px,1fr))]">
      <div className="mx-auto"><Loader /></div>
    </div>)
  }
  if (error) {
    console.log(error)
     return (<div className="lg:max-w-[90%] mx-auto mt-24 py-10 grid gap-y-10 grid-cols-[repeat(auto-fit,minmax(312px,1fr))]">
       <div className="mx-auto"><ErrorMessage message="Something went wrong" onRetry={()=>navigate("/") } /></div>
    </div>)
  }
    

  return (
    <div>
      {/* autocomplete */}
      <div className="fixed top-0 w-full bg-white shadow-lg py-4">
        <div className="w-[60%] mx-auto"> <AutoComplete item={training} setItem={setTraining} /></div>
      </div>
      {/* training cards */}
      <div className="lg:max-w-[90%] mx-auto mt-24 py-10 grid gap-y-10 grid-cols-[repeat(auto-fit,minmax(312px,1fr))]">
      {training?.map((train, index) => (
          <div key={index} className="mx-auto">
            <VideoCard
              path={train._id}
              thumbnail={train.thumbnail.asset.url}
              title={train.title}
              author={train.author.name}
              publishedAt={train.PublishedAt}
              authorImg={train.author.image}
              data1={train}
            />
          </div>
        ))
      }
    </div>
    </div>
    
  );
};

export default Training;
