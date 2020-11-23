import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((posts) => {
        setData(posts);
        // console.log(posts);
      })
      .catch(() => null);
  }, [url]);
  return data;
}
