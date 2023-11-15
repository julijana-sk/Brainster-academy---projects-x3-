import { useEffect, useState } from "react";

interface ReturnType<T> {
  aboutContentData: T;
  loading: boolean;
  error?: string;
}

export const useFetch = <T>(url: string, initialValue: T): ReturnType<T> => {
  const [aboutContentData, setAboutContentData] = useState<T>(initialValue);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((aboutContentData) => setAboutContentData(aboutContentData))
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, error, aboutContentData };
};
