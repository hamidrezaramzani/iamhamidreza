import axios from "axios";
import { useEffect, useState } from "react";

import Loading from "./Loading";
export const useLoadData = (url, callback = null) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setState(data);
        setLoading(false);
        if (callback) callback(data);
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
  const renderData = () => {
    if (loading) return <Loading />;

    if (data.length) {
      return data.map((item) => <Component key={item.id} {...item} />);
    }
  };

  return renderData;
};
