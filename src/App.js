import React from "react";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import ImageList from "./components/ImageList";
import MainTitle from "./components/MainTitle";

import { Container } from "./styles/shared/Container";

function App() {
  return (
    <Container>
      <Header />
      <MainTitle
        title="Glickr"
        subtitle="The best images source on the internet"
      />
      <Searchbar />
      <ImageList title="Recent" />
    </Container>
  );
}

export default App;
