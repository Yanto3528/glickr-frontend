import { useEffect, useState } from "react";
import axios from "axios";

const useInfiniteScroll = (
  initialData,
  initialUrl,
  pageNumber,
  nextPage = false
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(initialData);
  const [hasMore, setHasMore] = useState(nextPage);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    setUrl(initialUrl);
    setData([]);
  }, [initialUrl]);

  useEffect(() => {
    if (initialData.length !== 0) {
      setData(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    if (pageNumber === 1 && hasMore !== nextPage) {
      setHasMore(nextPage);
    }
    //eslint-disable-next-line
  }, [nextPage]);

  useEffect(() => {
    let cancel;
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await axios({
          method: "GET",
          url,
          params: { page: pageNumber },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        setData((prevData) => [...prevData, ...res.data.data]);
        setHasMore(res.data.nextPage);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (data.length === 0 || (pageNumber > 1 && hasMore) || url) {
      fetchData();
    }
    return () => {
      if (typeof cancel === "function") cancel();
    };
    //eslint-disable-next-line
  }, [pageNumber, url]);

  return { loading, error, hasMore, data };
};

export default useInfiniteScroll;
