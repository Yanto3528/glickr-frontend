import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";

import useInfiniteScroll from "./lib/hooks/useInfiniteScroll";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import ImageList from "./components/ImageList";
import MainTitle from "./components/MainTitle";
import LoadingIcon from "./components/LoadingIcon";
import ErrorBoundary from "./components/ErrorBoundary";
import Image from "./components/Image";

import { Container } from "./styles/shared/Container";
import { ErrorMessage } from "./styles/shared/ErrorMessage";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://glickr.herokuapp.com"
    : "http://localhost:5000";

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
    // If the last element is enter the view and has more is equal to true then increment page number to fetch the next data
    if (inView && hasMore) {
      setPageNumber((prevPage) => prevPage + 1);
    }
  }, [ref, inView, hasMore]);

  // For each of the function below, i use useCallback hook to prevent any unnessesary re rendering

  // when the user submit a search form then set url to search url and set page number to 1 again
  const searchByTags = useCallback((tags) => {
    setPageNumber(1);
    setUrl(`/api/images/search/${tags}`);
    setTitle(`Search results for: ${tags}`);
  }, []);

  // Close image viewer
  const handleCloseImageSlider = useCallback(() => {
    setCurrentImageIndex(null);
  }, []);

  // Go to previous image on image viewer
  const prevImage = useCallback(() => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((curImage) => curImage - 1);
    }
  }, [currentImageIndex]);

  // Go to next image on image viewer
  const nextImage = useCallback(() => {
    if (currentImageIndex < data.length - 1) {
      setCurrentImageIndex((curImage) => curImage + 1);
    }
  }, [currentImageIndex, data.length]);

  return (
    <Container data-testid="container">
      <Header />
      <MainTitle title="The best image source on the internet" />
      <Searchbar search={searchByTags} />
      <ErrorBoundary>
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
      </ErrorBoundary>
    </Container>
  );
};

export default App;
