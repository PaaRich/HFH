import { useContext, useRef, useState, useEffect } from "react";
import { Context } from "../Context/Context";
//import { urlFor } from "../services/sanityUtil";
import useIntersectionObserver from "../services/useIntersectionObserver";
import client from "../client";
import Card from "../components/Card";
import { PortableText } from "@portabletext/react";
import img from "./../assets/HolyFamily.jpg"
import MyLoader from "../components/ContentLoader"

const Events = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const query2 = `*[_type == "post"] {
  title,
  slug,
  body,
  author-> {
    name,
    image
  },
  publishedAt
}`;

    // Fetch data using GROQ
    client
      .fetch(query2)
      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const eventRef = useRef(null);

  const { setEvent } = useContext(Context);

  const isOnView = useIntersectionObserver(eventRef, { threshold: 0.5 });
  isOnView && setEvent(false);

  return (
    <div className="w-full flex gap-x-10 relative" ref={eventRef}>
      <div className="lg:max-w-[58%] overflow-y-auto mx-10">
        {!post ? (
          <MyLoader />
        ) : post.length === 0 ? (
          <p>No posts available</p>
        ) : (
          post.map((post, index) => (
            <div key={index}>
              <Card
                data={post}
                slug={post.slug.current}
                source={post.author.name.toLowerCase()}
                title={post.title}
                postedDate={post.publishedAt}
              >
                <PortableText value={post.body} />
              </Card>
            </div>
          ))
        )}
      </div>
      <div className=" h-dvh w-[40%] bg-[#f5f5f5d5] my-10 rounded-lg">
        <div className="w-[90%] mx-auto sticky top-0 pt-4">
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
      </div>
    </div>
  );
};

export default Events;
