import { useState } from "react";
import { SEARCH_CRITERIAS } from "../constants";

interface Props {
  searchCriteria: string;
  setSearchCriteria: React.Dispatch<React.SetStateAction<string>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TextFilter = ({
  searchCriteria,
  setSearchCriteria,
  searchText,
  setSearchText,
  handleSearch,
}: Props) => {
  return (
    <form className="filter-text" onSubmit={handleSearch} noValidate>
      <input
        type="text"
        className="form-control me-2 mb-2"
        aria-label="Search text"
        placeholder="Sherlock Holmes"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        required
      />
      <div className="invalid-feedback">Please provide a valid input.</div>
      <div className="input-group-append me-3 mb-2">
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
        className="btn btn-primary mb-3"
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
