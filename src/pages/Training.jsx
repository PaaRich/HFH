
import VideoCard from "../components/TrainingCard";
import client from "../client";
import { useState, useEffect } from "react";
import Loader from "../components/Loader"
//import { useNavigate } from "react-router-dom";
//import ErrorPage from "./ErrorPage";

const Training = () => {
  const [training, setTraining] = useState(null);
  //const navigate = useNavigate();

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

    // Fetch data using GROQ
    client
      .fetch(videoQuery)
      .then((data) => {
        setTraining(data);
      })
      // reconsider this line
      .catch((error) => {
        console.log(error);
        // navigate(<ErrorPage content={error} />);
      });
  }, []);

  return (
    <div className="lg:max-w-[90%] mx-auto py-10 grid gap-y-10 grid-cols-[repeat(auto-fit,minmax(312px,1fr))]">
      {!training ? (
        <div className="mx-aut0">
          <Loader />
        </div>
      ) : training.length == 0 ? (
        <h1>No item</h1>
      ) : (
        training?.map((train, index) => (
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
      )}
    </div>
  );
};

export default Training;
