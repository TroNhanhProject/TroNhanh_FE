import { useEffect, useState } from "react";
import { fetchApartments } from "../services/apartmentService";

export const useApartments = (filters) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApartments(filters)
      .then(setData)
      .finally(() => setLoading(false));
  }, [filters]);

  return { data, loading };
};
