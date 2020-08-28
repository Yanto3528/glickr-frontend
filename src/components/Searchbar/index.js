import React from "react";

import { SearchbarContainer, SearchbarInput } from "./styles";

const Searchbar = () => {
  return (
    <div>
      <form>
        <SearchbarInput type="text" placeholder="Search images by tags" />
      </form>
    </div>
  );
};

export default Searchbar;
