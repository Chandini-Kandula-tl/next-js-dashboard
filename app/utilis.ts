"use client";
import { useEffect, useState } from "react";
interface DataProps {
  id: number;
  name: string;
  age: number;
}
const useFetchUsersData = (rawData?: DataProps[]) => {
  const [data, setData] = useState<DataProps[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const mockData = [
          { id: 1, name: "John Doe", age: 30 },
          { id: 2, name: "Jane Smith", age: 25 },
        ];

        setData(rawData ?? mockData);
      } catch (err) {
        console.log(err);
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [rawData]);

  return { data, loading, error };
};

export default useFetchUsersData;
