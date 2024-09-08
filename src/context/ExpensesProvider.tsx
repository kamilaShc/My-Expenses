import { ReactNode, useContext, useState } from "react";
import { Expenses } from "../data";
import React from "react";

interface ExpensesContextType {
  expenses: Expenses[] | null;
  setExpenses: React.Dispatch<React.SetStateAction<Expenses[] | null>>;
}

export const ExpensesContext = React.createContext<ExpensesContextType>(
  {} as ExpensesContextType
);

interface Props {
  children: ReactNode;
}

const ExpensesProvider = ({ children }: Props) => {
  const [expenses, setExpenses] = useState<Expenses[] | null>(null);
  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesProvider;
