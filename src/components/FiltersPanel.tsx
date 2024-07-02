import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FiltersPanel = ({ children }: Props) => {
  return <div className="filter-panel mb-3">{children}</div>;
};

export default FiltersPanel;
