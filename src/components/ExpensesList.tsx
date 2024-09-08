import { useContext } from "react";
import ExpensesDay from "./ExpensesDay";
import { ExpensesContext } from "../context/ExpensesProvider";
import useExpenses from "../hooks/useExpenses";
import { Expenses } from "../data";

const groupByDate = (data: Expenses[]) => {
  return Object.groupBy(data, ({ date }) => date);
};

function ExpensesList() {
  const { expenses } = useExpenses();
  if (!expenses) {
    return (
      <section className="container mt-5">
        <p>You have no expenses</p>
      </section>
    );
  }

  const expensesGrouped = groupByDate(expenses);
  console.log({ ...expensesGrouped });
  return (
    <section className="container mt-5">
      {expensesGrouped &&
        Object.entries(expensesGrouped).map(([date, items]) => (
          <div key={date} className="mb-3">
            <h5 className="mb-1">{date}</h5>
            {items?.map((item) => (
              <ExpensesDay subject={item.subject} sum={item.sum} />
            ))}
          </div>
        ))}
    </section>
  );
}

export default ExpensesList;
