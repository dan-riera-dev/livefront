import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface FetchData {
  data: AxiosResponse["data"];
  loading: boolean;
  error: AxiosResponse["data"];
}

export const useFetch = (url: string) => {
  const [data, setData] = useState<FetchData["data"]>(null);
  const [loading, setLoading] = useState<FetchData["loading"]>(true);
  const [error, setError] = useState<FetchData["error"]>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
