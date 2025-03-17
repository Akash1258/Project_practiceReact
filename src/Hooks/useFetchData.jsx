import React, { useEffect, useState } from "react";

export const useDataFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const resp = await fetch(url);
      const jsonData = await resp.json();
      if (resp.status === 200) {
        setData(jsonData);
      } else {
        setError("Failed to fetch data");
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [loading, data, error];
};
