// src/hooks/useFetch.js

import { useState, useEffect } from "react";

export function useFetch(fetchFn) {
  const [data, setData]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await fetchFn();
      setData(res.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { data, loading, error, refetch: fetch };
}