import { useEffect, useState } from "react";

export const UseFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${
    import.meta.env.VITE_API_KEY
  }&query=${queryTerm}`;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url, signal);
        if (!response.ok) {
          throw new Error(response.statusText);
        } else {
          const result = await response.json();
          setLoading(false);
          setData(result.results);
        }
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [url]);
  return { data, loading };
};
