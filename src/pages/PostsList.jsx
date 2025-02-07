//import { urlFor } from "../services/sanityUtil";
import client from "../client";
import Card from "../components/PostCard";
import { useState, useEffect, useContext } from "react";
import { Context } from "../Context/Context";
// import { PortableText } from "@portabletext/react";
//import img from "./../assets/HolyFamily.jpg"
import MyLoader from "../components/ContentLoader";
import AutoComplete from "../components/SearchAutocomplete"
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const { post, setPost } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate =useNavigate()

  useEffect(() => {
    const query2 = `*[_type == "post"] {
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

    // Fetch data using GROQ
      // Function to fetch data
      const fetchData = async () => {
        try {
          const response = await client.fetch(query2);
          // if (!response) {
          //   throw new Error('Network response was not ok');
          // }
          // const result = await response.json();
          setPost(response);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  if (loading) {
    return (<div className="lg:max-w-[90%] mx-auto mt-24 py-10 grid gap-y-10 grid-cols-[repeat(auto-fit,minmax(312px,1fr))]">
      <div className="mx-auto"><MyLoader /></div>
    </div>)
  }
  if (error) {
     return (<div className="lg:max-w-[90%] mx-auto mt-24 py-10 grid gap-y-10 grid-cols-[repeat(auto-fit,minmax(312px,1fr))]">
       <div className="mx-auto"><ErrorMessage message="Something went wrong" onRetry={()=>navigate("/") } /></div>
    </div>)
  }
    

  

  return (
    <div className="w-full flex gap-x-10 ">
      <div className="fixed top-0 w-full bg-white shadow-lg py-4">
        <div className="w-[60%] mx-auto"> <AutoComplete item={post} setItem={setPost} /></div>
      </div>
     
      <div className="lg:min-w-[60%] overflow-y-auto mx-auto mt-24">
        {
          post.map((post, index) => (
            <div key={index}>
              <Card
                data={post}
                slug={post.slug.current}
                source={post.author.name.toLowerCase()}
                title={post.title}
                postedDate={post.publishedAt}
                desc={post.desc}
              />
                {/* <p className="text-xl font-semibold">{ post.desc}</p> */}
                {/* <PortableText value={post.body} /> */}
                {/* <PortableText value={getFirstTenWords(post.body)} /> */}
              
            </div>
          ))
        }
      </div>

      {/* aside */}
      {/* <div className=" h-dvh w-[35%] bg-[#f5f5f5d5] mt-5 rounded-lg">
        <div className="w-[90%] mx-auto sticky top-0 h-fit">
          <h1 className="text-2xl font-semibold pb-4 text-orange-300">
            Holy Family Hospital,Berekum
          </h1>
          <img src={img} alt="img" />
          <p className=" text-lg py-4 ">
            <abbr title="Holy Family Hospital" className="font-semibold">
              HFH
            </abbr>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem enim
            consequatur corporis cumque fuga. Nihil earum suscipit explicabo
            repellat vero corporis. Quisquam non laboriosam asperiores, amet
            recusandae voluptatum obcaecati omnis incidunt sit aspernatur facere
            accusamus neque, labore ipsam blanditiis modi dicta tempore nesciunt
            autem! Explicabo recusandae sapiente aperiam repellat voluptate!
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Events;
