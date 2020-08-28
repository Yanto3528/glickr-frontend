import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import ImageList from "./components/ImageList";
import MainTitle from "./components/MainTitle";

import { Container } from "./styles/shared/Container";

axios.defaults.baseURL = "http://localhost:5000";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentImages = async () => {
      try {
        const res = await axios.get("/api/images/recent");
        setImages(res.data);
      } catch (error) {
        if (error && error.response.data.error)
          setError(error.response.data.error);
      }
    };
    fetchRecentImages();
  }, []);

  console.log(images);

  return (
    <Container>
      <Header />
      <MainTitle
        title="Glickr"
        subtitle="The best images source on the internet"
      />
      <Searchbar />
      <ImageList title="Recent" images={images} />
    </Container>
  );
};

export default App;
