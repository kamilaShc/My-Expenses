import AddExpenseBtn from "../components/AddExpenseBtn";
import ExpensesList from "../components/ExpensesList";

function Homepage() {
  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col-lg">
          <AddExpenseBtn />
          <ExpensesList />
        </div>
        <div className="col-lg"></div>
      </div>
    </main>
  );
}

export default Homepage;
