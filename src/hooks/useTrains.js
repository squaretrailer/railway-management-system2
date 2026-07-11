// src/hooks/useTrains.js

import { useState, useEffect } from "react";
import { getTrains } from "../services/trainService";

export function useTrains() {
  const [trains, setTrains]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const fetchTrains = async () => {
    setLoading(true);
    try {
      const res = await getTrains();
      setTrains(res.data);
    } catch (err) {
      setError(err.message || "Failed to fetch trains");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrains();
  }, []);

  return { trains, loading, error, refetch: fetchTrains };
}