import client from "../../client";
import { useContext,useState } from "react";
import {Context} from "../../Context/Context"

export const useFetch = () => {

  const { post, setPost } = useContext(Context)
  const [loading,setLoading]=useState()
  const [error,setError]=useState()

    const fetchData = async () => {

        const postFetch = `*[_type == "post"] {
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
        try {
          const response = await client.fetch(postFetch);
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
  


  return {fetchData,loading,error,post,setPost};
}

export default useFetch