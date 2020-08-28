import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

import { SearchbarForm, SearchbarInput, SearchIcon } from "./styles";

const Searchbar = ({ search }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    search(data.tags);
    reset();
  };
  return (
    <div>
      <SearchbarForm onSubmit={handleSubmit(onSubmit)}>
        <SearchbarInput
          type="text"
          placeholder="Search images by tags"
          name="tags"
          ref={register({ required: true })}
        />
        <SearchIcon>
          <AiOutlineSearch size="2rem" />
        </SearchIcon>
      </SearchbarForm>
    </div>
  );
};

export default Searchbar;
