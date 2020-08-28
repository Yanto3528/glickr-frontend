import React, { useState, useEffect } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";

import useInfiniteScroll from "./lib/hooks/useInfiniteScroll";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import ImageList from "./components/ImageList";
import MainTitle from "./components/MainTitle";
import LoadingIcon from "./components/LoadingIcon";
import Image from "./components/Image";

import { Container } from "./styles/shared/Container";
import { ErrorMessage } from "./styles/shared/ErrorMessage";

axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
  const [url, setUrl] = useState("/api/images/recent");
  const [title, setTitle] = useState("Recent");
  const [pageNumber, setPageNumber] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [ref, inView] = useInView();
  const { loading, error, data, hasMore } = useInfiniteScroll(
    [],
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

  const handleCloseImageSlider = () => {
    setCurrentImageIndex(null);
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((curImage) => curImage - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < data.length - 1) {
      setCurrentImageIndex((curImage) => curImage + 1);
    }
  };

  return (
    <Container>
      <Header />
      <MainTitle title="The best image source on the internet" />
      <Searchbar search={searchByTags} />
      <ImageList
        title={title}
        images={data}
        loading={loading}
        ref={ref}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      {loading && <LoadingIcon />}
      {error && (
        <ErrorMessage center margin="10px 0">
          Error getting data
        </ErrorMessage>
      )}
      {currentImageIndex !== null && (
        <Image
          onClose={handleCloseImageSlider}
          images={data}
          index={currentImageIndex}
          next={nextImage}
          prev={prevImage}
        />
      )}
    </Container>
  );
};

export default App;
