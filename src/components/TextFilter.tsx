import { useState } from "react";
import { SEARCH_CRITERIAS } from "../constants";
import { StringLiteral } from "typescript";

interface Props {
  searchCriteria: string;
  setSearchCriteria: React.Dispatch<React.SetStateAction<string>>;
  searchBooks: (searchText: string) => void;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const TextFilter = ({
  searchCriteria,
  setSearchCriteria,
  searchBooks,
  searchText,
  setSearchText,
}: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    searchBooks(searchText);
    setSearchText("");
  };

  return (
    <form className="filter-text input-group" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        aria-label="Search text"
        placeholder="Sherlock Holmes"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        required
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {searchCriteria}
        </button>
        <div className="dropdown-menu">
          {SEARCH_CRITERIAS.map((criteria) => (
            <a
              className="dropdown-item"
              key={`${criteria}-option`}
              href="#"
              onClick={() => setSearchCriteria(criteria)}
            >
              {criteria}
            </a>
          ))}
        </div>
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Search
      </button>
    </form>
  );
};

export default TextFilter;
