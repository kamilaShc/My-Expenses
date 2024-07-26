import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FiltersPanel = ({ children }: Props) => {
  return <div className="filter-container">{children}</div>;
};

export default FiltersPanel;
