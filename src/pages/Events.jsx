import { useContext, useRef, useState, useEffect } from "react";
import { Context } from "../Context/Context";
import { urlFor } from "../services/sanityUtil";
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
      <div className="lg:max-w-[90%] mx-auto">
        <Card
          source=""
          title="System updates"
          description="There would be update this week"
        />
        {post?.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <img
              className="w-10"
              src={urlFor(post.author.image).url()}
              alt={post.author.name}
            />
            <p>{post.author.name}</p>
            <p>{post.publishedAt}</p>
            <PortableText value={post.body} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
