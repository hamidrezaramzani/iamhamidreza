import axios from "axios";
import { useEffect, useState } from "react";

import Loading from "./Loading";
export const useLoadData = (url) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setState(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { state, loading };
};

export const useRenderData = (Component, loading, data) => {
  const fetchData = () => {
    if (loading) return <Loading />;

    if (data.length) {
      return data.map((item) => <Component key={item.id} {...item} />);
    }
  };

  return fetchData;
};

