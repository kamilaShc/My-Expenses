import { useEffect, useRef, useState } from "react";
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
  const [wasValidated, setWasValidated] = useState<boolean>(false);
  const inputRef = useRef(null);

  const handleOutsideClick = (event: MouseEvent) => {
    console.log(event);
    console.log(inputRef.current);
    if (event.target !== inputRef.current) {
      setWasValidated(false);
    }
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    const form: HTMLFormElement = event.currentTarget;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      setWasValidated(true);
      console.log("was validated");
      return;
    }

    setWasValidated(false);
    handleSearch(event);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
  }, []);

  console.log("rendered");
  return (
    <form
      className={`filter-text ${wasValidated ? `was-validated` : ""}`}
      onSubmit={submitForm}
      noValidate
    >
      <div className="me-2 mb-2">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          aria-label="Search text"
          placeholder="Sherlock Holmes"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
        />
        <div className="invalid-feedback">What would you like to search?</div>
      </div>
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
