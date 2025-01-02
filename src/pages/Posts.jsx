import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace this URL with your Sanity project's API endpoint
    const fetchPosts = async () => {
      try {
        const response = await fetch(`*[_type == "post"]{
  title,
  body,
  "author": author->name,
  "image": mainImage.asset->url,
  publishedAt,
  slug
}`);
        // "https://<your-project-id>.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == 'post']{title, body, 'author': author->name, 'image': mainImage.asset->url, publishedAt, slug}"
        const { result } = await response.json();
        setPosts(result);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.slug.current} style={{ marginBottom: "2rem" }}>
            <h2>{post.title}</h2>
            {post.image && (
              <img src={post.image} alt={post.title} width="400" />
            )}
            <p>By: {post.author}</p>
            <p>Date: {new Date(post.publishedAt).toDateString()}</p>
            <PortableText value={post.body} />
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

export default Posts;
