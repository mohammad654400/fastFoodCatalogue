import { useEffect, useState } from "react";
import axios from "./axios";

const instance =axios.create({
    baseURL: "https://react-mini-projects-api.classbon.com",
  });



const useAxios = (axiosParams) => {
  const [response, setRespone] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await instance.request(axiosParams);
      setRespone(result.data);
      console.log(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [axiosParams.url]);

  return [ response, error, loading ];
};
export default useAxios
