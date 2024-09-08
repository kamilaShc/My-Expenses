import { useContext } from "react";
import { ExpensesContext } from "../context/ExpensesProvider";

const useExpenses = () => {
  return useContext(ExpensesContext);
};

export default useExpenses;
