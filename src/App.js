import React, { useState, useEffect } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";

import useInfiniteScroll from "./lib/hooks/useInfiniteScroll";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import ImageList from "./components/ImageList";
import MainTitle from "./components/MainTitle";
import LoadingIcon from "./components/LoadingIcon";

import { Container } from "./styles/shared/Container";
import { ErrorMessage } from "./styles/shared/ErrorMessage";

axios.defaults.baseURL = "http://localhost:5000";

const images = [];

const App = () => {
  const [url, setUrl] = useState("/api/images/recent");
  const [title, setTitle] = useState("Recent");
  const [ref, inView] = useInView();
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, data, hasMore } = useInfiniteScroll(
    images,
    url,
    pageNumber
  );

  useEffect(() => {
    if (inView && hasMore) {
      setPageNumber((prevPage) => prevPage + 1);
    }
  }, [ref, inView, hasMore]);

  const searchByTags = (tags) => {
    setPageNumber(1);
    setUrl(`/api/images/search/${tags}`);
    setTitle(`Search results for: ${tags}`);
  };

  return (
    <Container>
      <Header />
      <MainTitle
        title="Glickr"
        subtitle="The best images source on the internet"
      />
      <Searchbar search={searchByTags} />
      <ImageList title={title} images={data} ref={ref} />
      {loading && <LoadingIcon />}
      {error && (
        <ErrorMessage center margin="10px 0">
          Error getting data
        </ErrorMessage>
      )}
    </Container>
  );
};

export default App;
