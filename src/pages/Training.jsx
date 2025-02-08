import VideoCard from "../components/TrainingCard";
import Loader from "../components/Loader"
import AutoComplete from "../components/SearchAutocomplete"
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../services/fetches/useFetch";

const Training = () => {

  const navigate = useNavigate();

    // URL
  const trainingUrl = `*[_type == "training"]{
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
  //Fetching data
  const { data: training, setData: setTraining, loading, error } = useFetch(trainingUrl);
  

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
