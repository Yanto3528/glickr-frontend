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
    // Set a new url whenever the current url changes and set data to empty array as well
    setUrl(initialUrl);
    setData([]);
  }, [initialUrl]);

  useEffect(() => {
    // If there is any data passed in via outside, then set the data
    if (initialData.length !== 0) {
      setData(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    // If the current page number is 1 and the initial hasMore is not equal to nextpage then set has more to next page
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
        // If there are any error and the error is of type axios cancel then just return out of this function
        if (axios.isCancel(error)) return;
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    // Call fetch data when there are no data or has more is equal to true
    if (data.length === 0 || (pageNumber > 1 && hasMore) || url) {
      fetchData();
    }
    return () => {
      // if typeof cancel is a function which returned by axios then cancel it when unmounting
      if (typeof cancel === "function") cancel();
    };
    //eslint-disable-next-line
  }, [pageNumber, url]);

  return { setLoading, loading, error, hasMore, data };
};

export default useInfiniteScroll;
