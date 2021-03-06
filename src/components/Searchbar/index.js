import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";

import { SearchbarForm, SearchbarInput, SearchIcon } from "./styles";

const Searchbar = ({ search }) => {
  const [tags, setTags] = useState("");

  const onChange = useCallback((e) => setTags(e.target.value), []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (tags !== "") {
        search(tags);
        setTags("");
      }
    },
    [tags, search]
  );

  return (
    <div>
      <SearchbarForm onSubmit={onSubmit} data-testid="form">
        <SearchbarInput
          type="text"
          placeholder="Search images by tags"
          name="tags"
          onChange={onChange}
          value={tags}
        />
        <SearchIcon data-testid="search-icon">
          <AiOutlineSearch size="2rem" />
        </SearchIcon>
      </SearchbarForm>
    </div>
  );
};

Searchbar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default React.memo(Searchbar);
