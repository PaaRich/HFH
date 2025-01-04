import { useContext, useRef, useState, useEffect } from "react";
import { Context } from "../Context/Context";
//import { urlFor } from "../services/sanityUtil";
import useIntersectionObserver from "../services/useIntersectionObserver";
import client from "../client";
import Card from "../components/Card";
import { PortableText } from "@portabletext/react";

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
    <div className="w-full" ref={eventRef}>
      <div className="lg:max-w-[60%] mx-auto">
        {post?.map((post, index) => (
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
            {/* <h2>{post.title}</h2>
            <img
              className="w-10"
              src={urlFor(post.author.image).url()}
              alt={post.author.name}
            />
            <p>{post.author.name}</p>
            <p>{}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
