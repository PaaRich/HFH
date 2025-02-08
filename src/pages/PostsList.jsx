import Card from "../components/PostCard";
import MyLoader from "../components/ContentLoader";
import AutoComplete from "../components/SearchAutocomplete"
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../services/fetches/useFetch";

const Events = () => {

  // URL
     const postUrl = `*[_type == "post"] {
        title,
        slug,
        body,
        desc,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        author-> {
          name,
          image
        },
        publishedAt
      }`;
  
  //fetching data
  const { data:posts,setData:setPost, loading, error } = useFetch(postUrl);
  console.log(posts);
  // back func
  const navigate =useNavigate()

  
  if (loading) {
    return (<div className="lg:max-w-[90%] mx-auto mt-24 py-10 grid gap-y-10 grid-cols-[repeat(auto-fit,minmax(312px,1fr))]">
      <div className="mx-auto"><MyLoader /></div>
    </div>)
  }

  if (error) {
     return (<div className="lg:max-w-[90%] mx-auto mt-24 py-10 grid gap-y-10 grid-cols-[repeat(auto-fit,minmax(312px,1fr))]">
       <div className="mx-auto"><ErrorMessage message={`${error.message}`} onRetry={()=>navigate("/") } /></div>
    </div>)
  }
    

  return (
    <div className="w-full ">
      <div className="fixed top-0 w-full bg-white shadow-lg py-4">
        <div className="w-[60%] mx-auto"> <AutoComplete item={posts} setItem={setPost} /></div>
      </div>
     
      <div>
        <div className="w-[60%] mx-auto mt-20">
          {
          posts?.map((post, index) => (
            <div key={index}>
              <Card
                data={post}
                slug={post.slug.current}
                source={post.author.name.toLowerCase()}
                title={post.title}
                postedDate={post.publishedAt}
                desc={post.desc}
              />
            </div>
          ))
        }
        </div>
    </div>
        
    </div>
  );
};

export default Events;
