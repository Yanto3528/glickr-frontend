import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { SearchbarForm, SearchbarInput, SearchIcon } from "./styles";

const Searchbar = () => {
  return (
    <div>
      <SearchbarForm>
        <SearchbarInput type="text" placeholder="Search images by tags" />
        <SearchIcon>
          <AiOutlineSearch />
        </SearchIcon>
      </SearchbarForm>
    </div>
  );
};

export default Searchbar;
