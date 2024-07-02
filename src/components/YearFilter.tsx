interface Props {
  years: number[];
  onSelectYear: (year: number) => void;
  selectedYear: number | null;
}

const YearFilter = ({ years, onSelectYear, selectedYear }: Props) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {selectedYear ? selectedYear : "Select year"}
      </button>
      <div className="dropdown-menu" aria-labelledby="year">
        {years.map((year) => (
          <a
            className="dropdown-item"
            href="#"
            key={year}
            onClick={() => onSelectYear(year)}
          >
            {year}
          </a>
        ))}
      </div>
    </div>
  );
};

export default YearFilter;
