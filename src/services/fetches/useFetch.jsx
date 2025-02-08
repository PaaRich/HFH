import client from "../../client";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return; // Prevent fetching if no URL is provided

    let isMounted = true; // Prevent setting state if component unmounts

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await client.fetch(url);
        if (isMounted) setData(response);
      } catch (err) {
        if (isMounted) setError(err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to prevent memory leaks
    };
  }, [url]); 

  return { data, setData, error, loading };
};
