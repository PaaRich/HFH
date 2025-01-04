import VideoCard from "../components/TrainingCard";
import client from "../client";
import { useState, useEffect } from "react";

const Training = () => {
  const [training, setTraining] = useState(null);

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
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="lg:max-w-[90%] mx-auto py-10 grid grid-cols-[repeat(auto-fit,minmax(312px,1fr))]">
      {training?.map((train, index) => (
        <div key={index}>
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
      ))}
    </div>
  );
};

export default Training;
