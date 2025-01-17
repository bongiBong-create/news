import { useEffect, useState } from "react";

export const useFetch = (fetchFunction, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetchFunction(params);
        setData(response);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunction, stringParams]);

  return {
    data,
    isLoading,
    error,
  };
};
